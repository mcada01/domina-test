import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { User } from '../user/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAllByUserId(id: number): Promise<Task[]> {
    return this.taskRepository.find({ where: { user: { id: id } } });
  }

  async create(id: number, createTaskDto: CreateTaskDto): Promise<Task> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    const task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.user = user;

    return this.taskRepository.save(task);
  }

  async findOne(id: number): Promise<Task> {
    return this.taskRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateTaskDto: any): Promise<Task> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    const task = await this.taskRepository.findOne({
      where: { id: updateTaskDto.id },
    });
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.user = user;

    return this.taskRepository.save(task);
  }

  async delete(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id: id } });
    return this.taskRepository.remove(task);
  }
}
