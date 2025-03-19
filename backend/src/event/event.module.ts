import { Module } from '@nestjs/common';
import { EventService } from './service/event.service';
import { EventController } from './controller/event.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EventEntitySchema } from './entity/event.entity';

@Module({
  controllers: [EventController],
  providers: [EventService],
  imports:[MongooseModule.forFeature([{schema:EventEntitySchema, collection: 'events', name:'event'}])]
})
export class EventModule {}
