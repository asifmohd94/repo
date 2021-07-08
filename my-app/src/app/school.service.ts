import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }


  getStudent(name: string) {
    const url = "http://localhost:2600/api/student/info";
    const student = this.http.get(url, {
      params: new HttpParams().set('name', name)
    })
    return student;
  }

  getTeacher(name: string) {
    const url = "http://localhost:2600/api/teacher/info";
    const teacher = this.http.get(url, {
      params: new HttpParams().set('name', name)
    })
    return teacher;
  }

  studentAddmission(enroll_number: number, first_name: string, last_name: string, dob: Date, fathers_name: string, mothers_name: string, address: string, gender: string, session_id: number, addmission_grade: number) {
 
    let url = "http://localhost:2600/api/student/addmission";
    return this.http.post(url, {
      enroll_number,
      first_name,
      last_name,
      dob,
      fathers_name,
      mothers_name,
      address,
      gender,
      session_id,
      addmission_grade
    });
  }


}
