import { Test, TestingModule } from '@nestjs/testing';
import { LeadsinfoService } from './leadsinfo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from './leadsinfo.model';
import { userModel } from '../user/user.model';
import { ContactsService } from './contacts/contacts.service';

describe('LeadsinfoService', () => {
  let service: LeadsinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadsinfoService, ContactsService],
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_grab', {
          useUnifiedTopology: true,
          useNewUrlParser: true
        }),
        MongooseModule.forFeature([
          leadsInfoModel,
          userModel
        ])
      ]
    }).compile();

    service = module.get<LeadsinfoService>(LeadsinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
});



