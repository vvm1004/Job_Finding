import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import { Resume, ResumeSchema } from './schemas/resume.schena';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }])],

  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
