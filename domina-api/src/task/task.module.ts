import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User]), UserModule],
  controllers: [TaskController],
  providers: [TaskService, UserService],
})
export class TaskModule { }