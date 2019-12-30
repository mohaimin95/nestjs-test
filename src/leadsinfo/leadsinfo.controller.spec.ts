import { Test, TestingModule } from '@nestjs/testing';
import { LeadsinfoController } from './leadsinfo.controller';
import { UserService } from 'src/user/user.service';
import { LeadsinfoService } from './leadsinfo.service';

describe('Leadsinfo Controller', () => {
  let controller: LeadsinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadsinfoController],
      providers:[UserService,LeadsinfoService]
    }).compile();

    controller = module.get<LeadsinfoController>(LeadsinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
