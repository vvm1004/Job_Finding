import { Module } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';
import { Subcriber, SubcriberSchema } from './schemas/subscriber.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Subcriber.name, schema: SubcriberSchema }])],
  controllers: [SubscribersController],
  providers: [SubscribersService],
})
export class SubscribersModule { }
