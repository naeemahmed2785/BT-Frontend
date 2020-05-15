import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';


@Injectable()
export class QuestionnaireService {
    constructor(private http: HttpClient) { }
    apiUrl = 'http://localhost:3000/'

    getCriteriaName(subjectId) {
        return this.http.get<any>(this.apiUrl + 'questionnaire/getBySubject/' + subjectId);
    }
    getCriteriaById(id) {
        return this.http.get(this.apiUrl + 'questionnaire/getById/' + id)
    }
    getUpdatedStudentTest(objForm) {
        return this.http.post<any>(this.apiUrl + 'getUpdatedTest/', objForm)
    }

}
