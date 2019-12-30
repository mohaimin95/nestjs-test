import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LeadsinfoController } from './leadsinfo.controller';
import { LeadsinfoService } from './leadsinfo.service';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { UserService } from 'src/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from './leadsinfo.model';
import { userModel } from 'src/user/user.model';

@Module({
  imports:[
    MongooseModule.forFeature([
      leadsInfoModel,
      userModel
    ])
  ],
  controllers: [LeadsinfoController],
  providers: [LeadsinfoService,UserService]
})
export class LeadsinfoModule implements NestModule {
  configure(consumer:MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      LeadsinfoController
    )
  }
}
