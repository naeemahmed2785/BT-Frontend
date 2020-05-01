import { Injectable } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';


@Injectable()
export class CommonAnswerService {

    constructor(private questionnaireService: QuestionnaireService) { }

    generateTeacherComments(formData, data) {
        let tc = "";
        tc += "Behaviour was " + data.behaviour + ",";
        tc += " workpace was " + data.workpace + ",";
        tc += " Homework was " + data.workpace + ",";
        tc += " Understanding was " + data.understanding + ",";
        tc += " Puntuality was " + data.Puntuality + ".";
        if (data.concen.poor) {
            tc += " Concentration was poor.";
        }
        if (data.concen.hwPoor) {
            tc += " Homework quality was poor.";
        }
        tc += data.optional;
        let commentDate = data.date;
        const answer = { ...formData, results: tc, commentDate };

        this.questionnaireService.saveTeacherComment(answer).subscribe({
            next(data) {
                return true;
            },
            error(err) {
                return false;
            },
        });
    }
}