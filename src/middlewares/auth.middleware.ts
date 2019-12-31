import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response,Request } from 'express';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService:UserService) {}
  use(req: Request, res: Response, next: () => void) {
    let {authorization=null} = req.headers;
    
    if(!authorization) {
      return res.status(401).send({message:"Unauthorized request !"});
    } else {
      let userData = this.userService.decodeJwtToken(authorization) || {};
      let {_id=null} = userData; 
      if(_id) {
        req['user'] =  userData;
        return next();
      } else {
        return res.status(401).send({message:"Unauthorized request !"});
      }
    }
  }
}
