import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManageFormsService {
    apiUrl = 'http://localhost:3000/'
    constructor(private http: HttpClient) {

    }

    getFormsList() {
        return this.http.get<any>(this.apiUrl + 'questionnaire/getAll');
    }
    getSubject() {
        return this.http.get<any>(this.apiUrl + 'subjects/')

    }
    saveQuestionnaire(arrayofForm) {
        return this.http.post<any>(this.apiUrl + 'questionnaire/create/', arrayofForm);
    }

    deleteForm(id){
        console.log(id)
        return this.http.delete(this.apiUrl + 'updateForms/deleteFormById/' + id)
    }
}