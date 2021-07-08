import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddmissionComponent } from './addmission/addmission.component';
import { ContentComponent } from './content/content.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'addmission', component: AddmissionComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'content', component: ContentComponent, canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    NavigationComponent,
    StudentComponent,
    TeacherComponent,
    AddmissionComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
