import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  Patch,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './create-task.dto';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';
import { Query } from 'typeorm/driver/Query';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req): Promise<Task[]> {
    return this.taskService.findAllByUserId(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Request() req,
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<Task> {
    return this.taskService.create(req.user.id, createTaskDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async update(@Request() req, @Body() updateTaskDto: any): Promise<Task> {
    return this.taskService.update(req.user.id, updateTaskDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:id')
  async delete(@Request() req, @Param() param): Promise<Task> {
    return this.taskService.delete(param.id);
  }
}
