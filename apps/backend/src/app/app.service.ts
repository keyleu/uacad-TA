import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { Student } from './app.entity';

@Injectable()
export class AppService {
  private jsonString = fs
    .readFileSync(join(process.cwd(), './DB.json'))
    .toString();
  private jsonData = JSON.parse(this.jsonString);

  getAllStudents() {
    return [this.jsonData];
  }

  createStudent(student: Student) {
    const json = JSON.stringify(student);
    this.jsonData = { json, ...this.jsonData };
    return this.jsonData;
  }

  updateStudent(id: string, student: Student) {
    for (let i = 0; i < this.jsonData.length; ++i) {
      if (this.jsonData[i]['_id'] === id) {
        this.jsonData[i]['isOnline'] = student.isOnline;
        this.jsonData[i]['name'] = student.name;
        this.jsonData[i]['avatar'] = student.avatar;
        this.jsonData[i]['userName'] = student.username;
        this.jsonData[i]['email'] = student.email;
        this.jsonData[i]['phone'] = student.phone;
        this.jsonData[i]['inscriptionDate'] = student.inscriptionDate;
        this.jsonData[i]['courses'] = student.courses;
        break;
      }
    }
    return this.jsonData;
  }
}
