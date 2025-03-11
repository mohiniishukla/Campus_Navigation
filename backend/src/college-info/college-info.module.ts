import { Module } from '@nestjs/common';
import { CollegeInfoService } from './service/college-info.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CollegeInfoSchema } from './entity/college-info.entity';
import { CollegeInfoController } from './controller/college-info.controller';

@Module({
  imports:[MongooseModule.forFeature([{schema: CollegeInfoSchema, name:'collegeInfo', collection: 'collegeInfos'}])],
  controllers:[CollegeInfoController],
  providers: [CollegeInfoService]
})
export class CollegeInfoModule {}
