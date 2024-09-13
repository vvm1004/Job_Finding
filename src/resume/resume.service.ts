import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateResumeDto, CreateUserCvDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resume, ResumeDocument } from './schemas/resume.schena';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import aqp from 'api-query-params';
import { IUser } from 'src/users/users.interface';
import mongoose from 'mongoose';

@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resumeModel: SoftDeleteModel<ResumeDocument>) {}

  async create(createUserCvDto: CreateUserCvDto, user: IUser) {
    const {url, companyId, jobId} = createUserCvDto;
    let newResume =  await this.resumeModel.create({
      url, companyId, jobId,
      email: user.email,
      userId: user._id,
      status: "PENDING",
      history: [
        {
          status: "PENDING",
          updatedAt: new Date(),
          updatedBy: {
            _id: user._id,
            email: user.email
          }
        }
      ],
      createdBy: {
        _id: user._id,
        email: user.email
      }
     
    });
    return{
      _id: newResume?._id,
      createdAt: newResume?.createdAt
    }
  }


  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (currentPage - 1) * (limit);
    let defaultLimit = limit ? limit : 10;

    const totalItems = (await this.resumeModel.find(filter)).length
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.resumeModel.find(filter)
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
    if(!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException("Not found resume")
    return this.resumeModel.findById(id)
  }

  async findByUsers(user: IUser) {
    return this.resumeModel.find({userId: user._id})
  } 

  async update( _id: string, status: string, user: IUser) {
    if(!mongoose.Types.ObjectId.isValid(_id)){
      throw new BadRequestException("Not found resume")
    }
    console.log(status)
    const updated = await this.resumeModel.updateOne(
      {_id }, 
      {
        status,
        updatedBy: {
          _id: user._id,
          email: user.email
        },
        $push: {
          history: [
            {
              status: status,
              updatedAt: new Date(),
              updatedBy: {
                _id: user._id,
                email: user.email
              }
            }
          ]
        }
      })
    return updated
  }


  async remove(id: string, user: IUser) {
    if(!mongoose.Types.ObjectId.isValid(id)){
      return `Not found resume`
    }
    await this.resumeModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        }
      })
    return this.resumeModel.softDelete({
      _id: id,
    })
  }
}
