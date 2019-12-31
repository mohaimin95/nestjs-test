import { Module, NestModule, MiddlewareConsumer, forwardRef } from '@nestjs/common';
import { LeadsinfoController } from './leadsinfo.controller';
import { LeadsinfoService } from './leadsinfo.service';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { UserService } from '../user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from './leadsinfo.model';
import { userModel } from '../user/user.model';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';

@Module({
  imports:[
    forwardRef(()=>ContactsModule),
    ContactsModule,
    MongooseModule.forFeature([
      leadsInfoModel,
      userModel
    ]),
  ],
  controllers: [LeadsinfoController],
  providers: [LeadsinfoService,UserService,ContactsService]
})
export class LeadsinfoModule implements NestModule {
  configure(consumer:MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      LeadsinfoController,
      ContactsController
    )
  }
}
