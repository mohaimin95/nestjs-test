import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from '../leadsinfo.model';

@Module({
  controllers: [ContactsController],
  imports:[
    MongooseModule.forFeature([
      leadsInfoModel
    ])
  ],
  providers: [
    ContactsService
  ]
})
export class ContactsModule {}
