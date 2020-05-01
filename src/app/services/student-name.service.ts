import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { StudentComponent } from '../student/student.component';
import { newStudent } from '../model/newStudent.model';
import { searchStudent } from '../model/searchStudent.model';


@Injectable({
  providedIn: 'root'
})
export class StudentNameService {
  obj = new searchStudent();

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/'

  getStudentByRef(ref) {
    return this.http.get<any>(this.apiUrl + 'studentsByRef/' + ref);
  }

  saveNewStudent(obj: newStudent) {
    return this.http.post<newStudent>(this.apiUrl + 'newStudent/', obj)
  }

  getStudentsData(obj: any) {
    return this.http.post<any>(this.apiUrl + 'search', obj)
  }

  getSubject() {
    return this.http.get<any>(this.apiUrl + 'getSubjects/')
  }

  getStudentSubjects(id){
    return this.http.get<any>(this.apiUrl + 'getStudentSubjects/' + id)
  }

  viewStudentByRef(ref){
    return this.http.get(this.apiUrl + 'viewstudent/' + ref)
  }

}

  // getStudentAllData(){
  //   return this.http.get<any[]>(this.apiUrl)
  // }


