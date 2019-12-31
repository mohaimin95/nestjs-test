import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from '../leadsinfo.model';
import { userModel } from '../../user/user.model';

describe('Contacts Controller', () => {
  let controller: ContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
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
      providers:[ContactsService]
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
