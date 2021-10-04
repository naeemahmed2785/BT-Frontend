import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { StudentComponent } from '../student/student.component';
import { newStudent } from '../model/newStudent.model';
import { searchStudent } from '../model/searchStudent.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  obj = new searchStudent();

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/'

  getStudentsData(obj: any) {
    return this.http.post<any>(this.apiUrl + 'student/search/', obj);
  }

  getStudentByRef(ref) {
    return this.http.get<any>(this.apiUrl + 'student/' + ref + '/byRef');
  }

  getStudentSubjects(id) {
    return this.http.get<any>(this.apiUrl + 'student/' + id + '/subjects')
  }

  saveNewStudent(obj) {
    return this.http.post<any>(this.apiUrl + 'student/create/', obj)
  }


  getSubject() {
    return this.http.get<any>(this.apiUrl + 'getSubjects/')
  }


  viewStudentByRef(ref) {
    console.log(ref)
    return this.http.get(this.apiUrl + 'student/' + ref)
  }

  getAllStudent() {
    return this.http.get<any[]>(this.apiUrl + 'student/')
  }

}




