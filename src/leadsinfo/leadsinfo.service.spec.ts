import { Test, TestingModule } from '@nestjs/testing';
import { LeadsinfoService } from './leadsinfo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from './leadsinfo.model';
import { userModel } from 'src/user/user.model';

describe('LeadsinfoService', () => {
  let service: LeadsinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadsinfoService],
      imports:[
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
