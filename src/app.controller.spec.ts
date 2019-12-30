import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { LeadsinfoModule } from './leadsinfo/leadsinfo.module';
import { leadsInfoModel } from './leadsinfo/leadsinfo.model';
import { userModel } from './user/user.model';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports:[
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_grab'),
        UserModule,
        LeadsinfoModule,
        MongooseModule.forFeature([
          leadsInfoModel,
          userModel
        ])],
      providers: [
        AppService,
        UserService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(true).toBeTruthy();
    });
  });
});
