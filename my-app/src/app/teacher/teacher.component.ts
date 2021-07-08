import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacher: any;
  searched: boolean = false;
  constructor(private teacherService: SchoolService) { }

  ngOnInit(): void {
  }

  getTeacher(name: string) {
    this.teacherService.getTeacher(name).subscribe(data => {
      //@ts-ignore
      this.teacher = data.Teacher;
      this.searched = true
      console.log(this.teacher)
    })
  }

}
