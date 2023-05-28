import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.name = createUserDto.name;
        user.lastname = createUserDto.lastname;
        user.username = createUserDto.username;
        user.password = createUserDto.password;
        await user.setPassword(createUserDto.password);
        return this.userRepository.save(user);
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { username } });
    }
}
