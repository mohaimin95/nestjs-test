import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './user/user.module';
import { LeadsinfoModule } from './leadsinfo/leadsinfo.module';
import { UserService } from './user/user.service';
import { LeadsinfoService } from './leadsinfo/leadsinfo.service';
import { leadsInfoModel } from './leadsinfo/leadsinfo.model';
import { userModel } from './user/user.model';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs_grab',{
          useUnifiedTopology:true,
          useNewUrlParser:true
        }),
    UserModule,
    LeadsinfoModule,
    MongooseModule.forFeature([
      leadsInfoModel,
      userModel
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
    LeadsinfoService
  ],
})
export class AppModule {}
