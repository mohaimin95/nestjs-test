import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class UserService {
    jwtKey: string = "MohaiminMufeeda22122016";
    constructor(
        @InjectModel('User') private readonly userModel,
        @InjectModel('LeadsInfo') private readonly leadsInfo

    ) {

    }
    async save(userData: Object) {
        let salt = this.salt;
        let hash = bcrypt.hashSync(String(userData['password']), salt);
        let userObj = { ...userData };
        userObj['password'] = hash;
        let newUserData = new this.userModel(userObj);
        try {
            let data = await newUserData.save();
            userObj = { ...data._doc };
            delete userObj['password'];
            return this.getJwtToken(userObj);
        } catch (ex) {
            return null;
        }
    }
    async login(email, pass) {
        let userData = await this.userModel.findOne({ email }).lean();
        let { password = null } = userData || {};
        if (!password) {
            return false;
        } else {
            let isAuthorized = bcrypt.compareSync(pass, password);
            if (isAuthorized) {
                let userObj = { ...userData };
                delete userObj['password'];
                let token = this.getJwtToken(userObj);
                return token;
            } else {
                return false;
            }
        }
    }
    get salt() {
        return bcrypt.genSaltSync(10);
    }

    getJwtToken(jsonData) {
        return jwt.sign({ ...jsonData }, this.jwtKey);
    }
    decodeJwtToken(token: string) {
        try {
            let jwtObj = jwt.verify(token, this.jwtKey);
            return jwtObj;
        } catch (ex) {
            return null
        }
    }
}
