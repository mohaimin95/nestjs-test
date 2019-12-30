import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LeadsinfoService {
    constructor(
        @InjectModel('LeadsInfo') private readonly leadsInfoModel
    ) {}

    async save(data) {
        let leadsObj = new this.leadsInfoModel({...data});
        return await leadsObj.save();
    }
    async get(userData) {
        let leadsObj = await this.leadsInfoModel.find({
            createdBy:userData._id
        }).lean();
        return leadsObj;
    }
    
    async getById(id,userData) {
        let leadsObj = await this.leadsInfoModel.findOne({
            _id:id,
            createdBy:userData._id
        }).lean();
        return leadsObj;
    }
    
    async delete(id,userData) {
        await this.leadsInfoModel.deleteOne({
            _id:id,
            createdBy:userData._id
        }).lean();
        return true;
    }



}
