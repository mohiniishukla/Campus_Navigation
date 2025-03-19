import { Controller, Get } from '@nestjs/common';
import { CollegeInfoService } from '../service/college-info.service';

@Controller('college-info')
export class CollegeInfoController {
    constructor(private collegeInfoService: CollegeInfoService){}
    
    @Get()
    async fetchCollegeDetails(){
        return await this.collegeInfoService.getCollegeInfo();
    }
}
