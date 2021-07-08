import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent implements OnInit {

  constructor(private addmissionService: SchoolService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    const enroll_number = form.value.enroll_number;
    const first_name = form.value.first_name;
    const last_name = form.value.last_name;
    const dob = form.value.dob;
    const fathers_name = form.value.fathers_name;
    const mothers_name = form.value.mothers_name;
    const address = form.value.address;
    const gender = form.value.gender;
    const session_id = form.value.session_id;
    const addmission_grade = form.value.addmission_grade;

   
    this.addmissionService.studentAddmission(enroll_number, first_name, last_name, dob, fathers_name, mothers_name, address, gender, session_id, addmission_grade)
      .subscribe(data => {
        console.log(data);
      })

  }


}
