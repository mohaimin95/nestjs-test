import { Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    async saveUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        let userObj = {
            name, email, password
        };
        let token = await this.userService.save(userObj);
        if (token) {
            return {
                token,
                success: true
            }
        } else {
            return {
                token: null,
                success: false
            }
        }
    }
    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        let token = await this.userService.login(email, password);
        return {
            token,
            success: !!token
        }

    }
}
