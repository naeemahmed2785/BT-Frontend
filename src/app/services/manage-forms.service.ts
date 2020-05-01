import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManageFormsService {
    apiUrl = 'http://localhost:3000/'
    constructor(private http: HttpClient) {

    }

    getFormsList() {
        return this.http.get<any>(this.apiUrl + 'getFormsList');
    }
    getSubject() {
        return this.http.get<any>(this.apiUrl + 'getSubjects/')

    }
    saveCreatedForm(arrayofForm) {
        console.log('got Array in service::', arrayofForm)
        return this.http.post<any>(this.apiUrl + 'saveNewForms', arrayofForm);

    }
}