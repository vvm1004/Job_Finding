import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Subcriber, SubcriberDocument } from './schemas/subscriber.schema';
import { IUser } from 'src/users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import { UpdateJobDto } from 'src/jobs/dto/update-job.dto';

@Injectable()
export class SubscribersService {
  constructor(@InjectModel(Subcriber.name) private subcriberModel: SoftDeleteModel<SubcriberDocument>) { }

  async create(createSubscriberDto: CreateSubscriberDto, user: IUser) {
    const { name, email, skills } = createSubscriberDto
    const isExist = await this.subcriberModel.findOne({ email });
    if (isExist) {
      throw new BadRequestException(`Email: ${email} đã tồn tại trên hệ thống`)
    }
    const newSubcriber = await this.subcriberModel.create({
      name, email, skills,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    })
    return {
      _id: newSubcriber?._id,
      createdAt: newSubcriber?.createdAt
    }
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (currentPage - 1) * (limit);
    let defaultLimit = limit ? limit : 10;

    const totalItems = (await this.subcriberModel.find(filter)).length
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.subcriberModel.find(filter)
      .skip(offset)
      .limit(limit)
      .sort(sort as any)
      .populate(population)
      .select(projection as any)
      .exec()

    return {
      meta: {
        current: currentPage, //trang hien tai
        pageSize: limit,  //so luong ban ghi da lay
        pages: totalPages, //tong so trang voi dieu kien query
        total: totalItems //tong so phan tu (so ban ghi)
      },
      result //kết quả query
    }

  }


  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      return `Not found role with id ${id}`
    return this.subcriberModel.findById(id)
  }


  async update(updateSubscriberDto: UpdateSubscriberDto, user: IUser) {
    const updated = await this.subcriberModel.updateOne(
      { email: user.email },
      {
        ...updateSubscriberDto,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      },
      { upsert: true }
    );
    return updated
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Not found subcriber with id ${id}`)
    await this.subcriberModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        }
      })
    return this.subcriberModel.softDelete({
      _id: id,
    })
  }
  async getSkills(user: IUser) {
    const { email } = user;
    return await this.subcriberModel.findOne({ email }, { skills: 1 })
  }
}

