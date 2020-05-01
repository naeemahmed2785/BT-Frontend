import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScienceComponent } from 'src/app/science/science.component';
import { RegisterStudentComponent } from './registerStudent/register-student.component';
import { SearchStudentComponent } from './searchstudent/searchstudent.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { FormsListComponent } from './ManageForms/forms-list/forms-list.component';
import { NewFormCriteriaComponent } from './ManageForms/new-form-criteria/new-form-criteria.component';

const routes: Routes = [
  { path: "science", component: ScienceComponent },
  { path: 'manageforms', component: FormsListComponent },
  { path: 'newForm', component: NewFormCriteriaComponent },
  { path: "viewStudent/:ref/:id", component: ViewstudentComponent },
  { path: "newStudent", component: RegisterStudentComponent },
  { path: "search", component: SearchStudentComponent },
  { path: 'teacher/:ref/:id/:heading', component: QuestionnaireComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
