import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from './contacts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from '../leadsinfo.model';

describe('ContactsService', () => {
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_grab',{
          useUnifiedTopology:true,
          useNewUrlParser:true
        }),
        MongooseModule.forFeature([
          leadsInfoModel
        ])
      ],
      providers: [ContactsService],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
