import * as mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        default:new Date()
    },
    updated_at:{
        type:Date,
        default:new Date()
    }
});

export const userModel:{name:string,schema:any} = {
    name:'User',
    schema:usersSchema
}