import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userService.create(createUserDto);
        return user;
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
        return await this.authService.generateToken(loginUserDto);
    }
}
