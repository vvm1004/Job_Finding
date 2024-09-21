import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto, CreateUserCvDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('resummes')
@Controller('resumes')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) { }

  @Post()
  @ResponseMessage('Create new resume')

  create(@Body() createUserCvDto: CreateUserCvDto, @User() user: IUser) {
    return this.resumeService.create(createUserCvDto, user);
  }

  @Post('by-user')
  @ResponseMessage('Get resume by User')
  getResumesByUser(@User() user: IUser) {
    return this.resumeService.findByUsers(user);
  }

  @Get()
  @Public()
  @ResponseMessage('Fetch List Job with paginate')
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string
  ) {
    return this.resumeService.findAll(+currentPage, +limit, qs);
  }

  @Public()
  @Get(':id')
  @ResponseMessage("Fetch resume by id")
  findOne(@Param('id') id: string) {
    return this.resumeService.findOne(id)
  }


  @Patch(':id')
  @ResponseMessage('Update status resume')

  updateStatus(@Param('id') id: string, @Body("status") status: string, @User() user: IUser) {
    return this.resumeService.update(id, status, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.resumeService.remove(id, user);
  }
}
