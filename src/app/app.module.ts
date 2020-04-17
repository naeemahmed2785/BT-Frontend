import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule} from 'ngx-clipboard';
import { ScienceComponent } from './science/science.component';
import { StudentComponent } from './student/student.component';
import { StudentNameService } from './services/student-name.service';
import { HttpClientModule} from '@angular/common/http';
import { RegisterStudentComponent } from './registerStudent/register-student.component';
import { SearchStudentComponent } from './searchstudent/searchstudent.component';
import { TeachercommentComponent } from './maths/teacherComment/teachercomment.component';
import { DynamicFormBuilderModule } from './dynamicForms/dynamic-form-builder.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScienceComponent,
    StudentComponent,
    RegisterStudentComponent,
    SearchStudentComponent,
    TeachercommentComponent,
   
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
  providers: [StudentNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
