import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScienceComponent } from 'src/app/science/science.component';
import { RegisterStudentComponent } from './registerStudent/register-student.component';
import { SearchStudentComponent } from './searchstudent/searchstudent.component';
import { TeachercommentComponent } from './maths/teacherComment/teachercomment.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';

const routes: Routes = [
  {path: "science", component: ScienceComponent},
  {path: "viewStudent/:ref/:id", component: ViewstudentComponent},
  {path: "newStudent", component: RegisterStudentComponent},
  {path: "search", component: SearchStudentComponent},
  {path: 'teacher/:ref/:id/:heading', component: TeachercommentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
