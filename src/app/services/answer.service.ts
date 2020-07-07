import { Injectable } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';


@Injectable()
export class AnswerService {

    apiUrl = 'http://localhost:3000/'

    constructor(
        private http: HttpClient
    ) { }

    saveAnswer(data) {
        return this.http.post<any>(this.apiUrl + 'answer/create/', data);
    }

    generateTeacherComments(teacherComments) {
        let tc = "";
        tc += "Behaviour was " + teacherComments.classbehaviour + ",";
        tc += " workpace was " + teacherComments.workpace + ",";
        tc += " Homework was " + teacherComments.homeworkquality + ",";
        tc += " Understanding was " + teacherComments.understanding + ",";
        tc += " Puntuality was " + teacherComments.punctuality + ".";

        if (teacherComments.hasOwnProperty('concen') && teacherComments.concen.poor) {
            tc += " Concentration was poor.";
        }
        if (teacherComments.hasOwnProperty('concen') && teacherComments.concen.hwPoor) {
            tc += " Homework quality was poor.";
        }
        tc += teacherComments.optionalcomments + ".";
        tc += teacherComments.createdDate;
        return tc;
    }
}