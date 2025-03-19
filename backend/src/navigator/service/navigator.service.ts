import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NavigationDocument } from '../entity/navigoator.entity';
import { Model } from 'mongoose';

@Injectable()
export class NavigatorService {
    constructor(@InjectModel('navigation')
    private readonly navigationModel: Model<NavigationDocument>){

    }

    async getRecord(){
        try{
            const records = await this.navigationModel.find({});
            return records;
        }
        catch(error){
            throw error;
        }
    }
}
