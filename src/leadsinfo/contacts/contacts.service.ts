import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
@Injectable()
export class ContactsService {
    ObjectId = mongoose.Types.ObjectId;
    constructor(
        @InjectModel('LeadsInfo') private readonly leadsInfoModel:any
    ) { }
    async getAll(leadId) {
        try {
            return await this.leadsInfoModel.aggregate([
                {
                    $match:{
                        _id:this.ObjectId(leadId)
                    }
                },
                {
                    $unwind:"$contacts"
                },
                {
                    $project:{
                        companyname:1,
                        contacts:1
                    }
                }
            ])
        } catch(ex) {
            return [];
        }
    }
}
