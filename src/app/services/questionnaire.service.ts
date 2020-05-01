import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';


@Injectable()
export class QuestionnaireService {
    constructor(private http: HttpClient) { }
    apiUrl = 'http://localhost:3000/'

    getCriteriaType(subjectId) {
        return this.http.get<any>(this.apiUrl + 'getCriteriaType/' + subjectId);
    }
    getCriteriaById(id) {
        return this.http.get(this.apiUrl + 'getCriteriaById/' + id)
    }
    getUpdatedStudentTest(objForm) {
        return this.http.post<any>(this.apiUrl + 'getUpdatedTest/', objForm)
    }
    saveTeacherComment(obj) {
        return this.http.post<any>(this.apiUrl + 'saveteachercomment/', obj)
    }
    saveTestRecord(obj) {
        return this.http.post<any>(this.apiUrl + 'savetestrecord/', obj)
    }
    savePTM(obj) {
        return this.http.post(this.apiUrl + 'ptm/', obj);
    }

}
