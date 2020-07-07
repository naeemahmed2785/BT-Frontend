import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class SubjectService {
    constructor(private http: HttpClient) { }

    apiUrl = 'http://localhost:3000/'


    getAll() {
        return this.http.get(this.apiUrl + 'subjects/');
    }

    getReportBySubjectId(subjectId, reportName, weeksdue = 0) {
        return this.http.get<any>(this.apiUrl + 'subjects/' + subjectId + '/' + reportName + '/' + weeksdue);
    }

}