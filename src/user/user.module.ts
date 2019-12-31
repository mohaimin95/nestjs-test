import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userModel } from './user.model';
import { leadsInfoModel } from '../leadsinfo/leadsinfo.model';

@Module({
  imports:[
    MongooseModule.forFeature([
      userModel,
      leadsInfoModel
    ])
  ],
  controllers: [UserController],
  providers: [
    UserService
  ]
})
export class UserModule {}
