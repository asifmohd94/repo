import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
    if (!form.valid) {
      return
    }

    const username = form.value.username;
    const email = form.value.email;

    const password = form.value.password;

    this.authService.register(username, email, password).subscribe(resData => {
      console.log("User Created");
      this.router.navigate(['/signin']);
    })
  }

}
