import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

interface IStudent {
  enroll_number?: number,
  first_name?: string,
  last_name?: string
  fathers_name?: string,
  gender?: string,
  dob?: string,
  addmission_grade?: number,
  address?: string

}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student!: IStudent[];
  searched: boolean = false;
  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
  }

  getStudent(name: string) {
    this.schoolService.getStudent(name).subscribe(data => {
      //@ts-ignore
      this.student = data.Students;
      this.searched = true;
      console.log(this.student);

    })
  }

}
