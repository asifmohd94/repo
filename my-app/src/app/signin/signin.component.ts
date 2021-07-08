import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signinUser(form: NgForm) {

    if (!form.valid) {
      return
    }
    const username = form.value.username;
    const password = form.value.password;

    this.authService.signinUser(username, password).subscribe(resData => {

      //@ts-ignore
      console.log(resData.token);
      //@ts-ignore
      localStorage.setItem('token', resData.token);
      this.router.navigate(['/content'])
    })

  }

}
