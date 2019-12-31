import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsInfoModel } from '../leadsinfo/leadsinfo.model';
import { userModel } from './user.model';
import { UserService } from './user.service';

describe('User Controller', () => {
  let controller: UserController;

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
      controllers: [UserController],
      providers:[UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
