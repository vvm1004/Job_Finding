import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import {genSaltSync, hashSync, compareSync} from 'bcryptjs'
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './users.interface';
import { Tracing } from 'trace_events';
import { UpdateCompanyDto } from 'src/companies/dto/update-company.dto';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>) {}

  getHashPassword =  (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt)
    return hash
  }

  async create(createUserDto: CreateUserDto ,user: IUser) {
  //async create(email: string, password : string, name : string) {
    const hashPassword = this.getHashPassword(createUserDto.password)
    const isExist = await this.userModel.findOne({email: createUserDto.email})
    if(isExist){
      throw new BadRequestException(`Email đã tồn tại`)
    }
    let newUser = await this.userModel.create({
    ...createUserDto, 
    password: hashPassword, 
    createdBy: {
      _id: user._id,
      email: user.email
    }
    })
    return newUser
  }

  async register(user: RegisterUserDto) {
    const {name, email, password, age, gender, address} = user
    const hashPassword = this.getHashPassword(password)
    const isExist = await this.userModel.findOne({email})
    if(isExist){
      throw new BadRequestException(`Email đã tồn tại`)
    }
    let newRegister = await this.userModel.create({
      name, email,
      password: hashPassword,
      age,
      gender,
      address,
      role: "USER"
    })
    return newRegister
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.page;
    delete filter.limit;

    let offset = (currentPage - 1) * (limit);
    let defaultLimit = limit ? limit : 10;

    const totalItems = (await this.userModel.find(filter)).length
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel.find(filter)
      .skip(offset)
      .limit(limit)
      .sort(sort as any)
      .populate(population)
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
      return `Not found user with id ${id}`
    return this.userModel.findOne({
      _id: id
    }).select("-password")
  }

  findOneByUsername(username: string) {
   
    return this.userModel.findOne({
      email: username
    })
  }


  isValidPassword(password: string, hash: string){
   return compareSync(password, hash);
  }

  async update( updateUserDto: UpdateUserDto, user: IUser) {
    return await this.userModel.updateOne(
      {_id: updateUserDto._id}, 
      {
        ...updateUserDto,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      })
  }

  async remove(id: string, user: IUser) {
    if(!mongoose.Types.ObjectId.isValid(id)){
      return `Not found user`
    }
    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        }
      })
    return this.userModel.softDelete({
      _id: id,
    })
  }
}
