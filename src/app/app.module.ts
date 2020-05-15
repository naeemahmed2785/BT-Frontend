import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { ScienceComponent } from './science/science.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterStudentComponent } from './registerStudent/register-student.component';
import { SearchStudentComponent } from './searchstudent/searchstudent.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DynamicFormBuilderModule } from './dynamicForms/dynamic-form-builder.module';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { QuestionnaireService } from './services/questionnaire.service';
import { AnswerService } from './services/answer.service';
import { FormsListComponent } from './ManageForms/forms-list/forms-list.component';
import { ManageFormsService } from './services/manage-forms.service';
import { NewFormCriteriaComponent } from './ManageForms/new-form-criteria/new-form-criteria.component';
import { SubjectService } from './services/subject.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScienceComponent,
    StudentComponent,
    RegisterStudentComponent,
    SearchStudentComponent,
    QuestionnaireComponent,
    ViewstudentComponent,
    FormsListComponent,
    NewFormCriteriaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    HttpClientModule,
    DynamicFormBuilderModule
  ],
  providers: [
    StudentService,
    QuestionnaireService,
    AnswerService,
    ManageFormsService,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
