import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { EventEntityDocument } from '../entity/event.entity';
import { Model } from 'mongoose';

@Injectable()
export class EventService {
  constructor(@InjectModel('event')
private readonly eventModel: Model<EventEntityDocument>){}

  create(createEventDto: CreateEventDto) {
    return 'Post Payload';
  }

  async findAll() {
    try{
      return await this.eventModel.find({});
    }
    catch(error){
      throw error;
    }
  }

  findOne(id: number) {
    return `Find by #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `Insert by #${id} event`;
  }

  remove(id: number) {
    return `Purge by #${id} event`;
  }
}
