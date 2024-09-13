import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

  @ResponseMessage("Create a new job")
  @Post()
  create(
    @Body() createJobDto: CreateJobDto, @User() user: IUser
  ) {
    return this.jobsService.create(createJobDto, user);
  }

  @Get()
  @Public()
  @ResponseMessage('Fetch List Job with paginate')
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string
  ) {
    return this.jobsService.findAll(+currentPage, +limit, qs);
  }


  @Public()
  @Get(':id')
  @ResponseMessage("Fetch job by id")
   findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id)
  }

  @ResponseMessage("Update a Job")
  @Patch(':id')
  update(@Param('id') id : string, @Body() updateUserDto: UpdateJobDto, @User() user: IUser) {
    return this.jobsService.update(id, updateUserDto, user);
  }

  @ResponseMessage("Delete a Job")
  @Delete(':id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.jobsService.remove(id, user);
  }
}
