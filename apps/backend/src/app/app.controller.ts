import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Student } from './app.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStudents() {
    return this.appService.getAllStudents();
  }

  @Patch(':id')
  updateStudent(@Param('id') id: string, @Body() newStudent: Student) {
    return this.appService.updateStudent(id, newStudent);
  }

  @Post()
  createStudent(@Body() newStudent: Student) {
    return this.appService.createStudent(newStudent);
  }
}
