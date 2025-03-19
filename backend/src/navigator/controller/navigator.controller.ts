import { Controller, Get } from '@nestjs/common';
import { NavigatorService } from '../service/navigator.service';

@Controller('navigator')
export class NavigatorController {
    constructor(private navigatorService: NavigatorService){}

    // @UsePipes(new ValidationPipe({ transform: true, whitelist: true}))
    @Get()
    async getNavigationRecord() {
        return await this.navigatorService.getRecord();
    }
}
