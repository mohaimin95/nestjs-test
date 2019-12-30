import * as mongoose from 'mongoose';

const leadsinfoSchema = new mongoose.Schema({
    companyname:{
        type:String,
        required:true,
    },
    contacts:[{
        name:String,
        email:String,
        phoneno:String
    }],
    createdBy:{
        type:mongoose.Types.ObjectId,
        required:true
    },

});
export const leadsInfoModel:{name:string,schema:any} = {
    name:'LeadsInfo',
    schema:leadsinfoSchema
}