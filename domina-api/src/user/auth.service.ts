import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { LoginUserDto } from './login-user.dto';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly userService: UserService) { }

    async generateToken(loginUserDto: LoginUserDto): Promise<Object> {
        const { username, password } = loginUserDto;

        const user = await this.userService.findOne(username);

        if (!user || !(await user.validatePassword(password))) {
            throw new UnauthorizedException('Invalid username or password');
        }

        const payload = { username: user.username, sub: user.id };
        const token = this.jwtService.sign(payload);

        return {
            user,
            token
        }
    }

}
