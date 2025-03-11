import { Module } from '@nestjs/common';
import { NavigatorController } from './controller/navigator.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NavigationSchema } from './entity/navigoator.entity';
import { NavigatorService } from './service/navigator.service';

@Module({
  controllers: [NavigatorController],
  providers:[NavigatorService],
  imports:[MongooseModule.forFeature([{schema:NavigationSchema, name:'navigation'}])]
})
export class NavigatorModule {}
