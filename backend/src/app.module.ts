import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NavigatorModule } from './navigator/navigator.module';
import { CollegeInfoModule } from './college-info/college-info.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/navigation'), 
    NavigatorModule,
    CollegeInfoModule
    // EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
