import { Test, TestingModule } from '@nestjs/testing';
import { LeadsinfoController } from './leadsinfo.controller';
import { UserService } from '../user/user.service';
import { LeadsinfoService } from './leadsinfo.service';
import { ContactsService } from './contacts/contacts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from './leadsinfo.model';
import { userModel } from '../user/user.model';

describe('Leadsinfo Controller', () => {
  let controller: LeadsinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_grab',{
          useUnifiedTopology:true,
          useNewUrlParser:true
        }),
        MongooseModule.forFeature([
          leadsInfoModel,
          userModel
        ]),
      ],
      controllers: [LeadsinfoController],
      providers:[UserService,LeadsinfoService,ContactsService]
    }).compile();

    controller = module.get<LeadsinfoController>(LeadsinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
