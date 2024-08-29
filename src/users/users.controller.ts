import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from './users.interface';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ResponseMessage("Create a new user")
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,  @User() user: IUser
  ) {
    
    let newUser = await this.usersService.create(createUserDto, user);
    return{
      _id: newUser?._id,
      createdAt: newUser?.createdAt
    }
  }

  @Get()
  @ResponseMessage('Fetch List User with paginate')
  findAll(
    @Query("page") currentPage: string,
    @Query("limit") limit: string,
    @Query() qs: string
  ) {
     return this.usersService.findAll(+currentPage, +limit, qs);
  }


  @Public()
  @Get(':id')
  @ResponseMessage("Fetch user by id")
  async findOne(@Param('id') id: string) {
    const foundUser = await this.usersService.findOne(id)
    return foundUser
  }

  @ResponseMessage("Update a User")
  @Patch()
  update( @Body() updateUserDto: UpdateUserDto, @User() user: IUser) {
    return this.usersService.update( updateUserDto, user);
  }

  @ResponseMessage("Delete a User")
  @Delete(':id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.usersService.remove(id, user);
  }
}
