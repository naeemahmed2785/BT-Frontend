import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentNameService } from 'src/app/services/student-name.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-teacher',
    templateUrl: './teachercomment.component.html',
    styleUrls: ['./teachercomment.component.css']
})

export class TeachercommentComponent implements OnInit {
    form: FormGroup;
    refNumber
    students;
    heading;
    subjects;
    questionaire = [];
    listOfQuestionaire;
    selectedQuestionaireId;
    teacherComments: {[key: string]: any } = {};

    constructor(
        private studentNameService: StudentNameService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params.subscribe((data) => {
            this.refNumber = data.ref;
            this.heading = data.heading;
            this.teacherComments.selectedSubjectId = 0;
            this.selectedQuestionaireId = 0;
            this.teacherComments.selectedStudentId = data.id;
            this.studentNameService.getStudentById(this.refNumber).subscribe((data) => this.students = data);
        });

        this.studentNameService.getStudentSubjects(this.teacherComments.selectedStudentId).subscribe((data)=> {
            this.subjects= data;
        })
    }

    onChangeStudent(){
        this.studentNameService.getStudentSubjects(this.teacherComments.selectedStudentId).subscribe((data)=> {
            this.subjects= data;          
        })
    }

    onChangeSubject() {
        this.studentNameService.getCriteriaType(this.teacherComments.selectedSubjectId).subscribe(data => {
            this.listOfQuestionaire = data;
        });
    }
    onChangeQuestionaireType() {
        this.questionaire = [];
        this.teacherComments.results = '';
        if (this.selectedQuestionaireId > 0) {
            this.studentNameService.getCriteriaById(this.selectedQuestionaireId).subscribe((data) => {
                this.questionaire = JSON.parse(data[0].Criteria);
                this.form = new FormGroup({
                    fields: new FormControl(JSON.stringify(this.questionaire))
                });        
            });
        }
    }

    onSubmit(data) {
        console.log('data::', data);
        switch (data.type) {
            case "TeacherComments":
                this.generateTeacherComments(data);
                break;
            case "PTM":
                this.generatePTM(data);
                break;
            case "SupervisorComments":
                this.generateSupervisorComments(data);
                break;
            case "TestRecord":
                this.generateTestRecordTable(data);
                break;
            default:
                break;
        }
        this.questionaire = [];
        this.teacherComments.results = '';
        this.teacherComments.selectedQuestionaireId = 0;

    }

    generateTeacherComments(data) {
        let tc = '';
        tc += 'Behaviour was ' + data.behaviour + ',';
        tc += ' workpace was ' + data.workpace + ',';
        tc += ' Homework was ' + data.workpace + ',';
        tc += ' Understanding was ' + data.Understanding + ',';
        tc += ' Puntuality was ' + data.Puntuality + '.';
        if (data.concen.poor) {
            tc += ' Concentration was poor.';
        }
        if (data.concen.hwPoor) {
            tc += ' Homework quality was poor.';
        }
        tc += data.optional;
        this.teacherComments.results = tc;
        console.log(this.teacherComments.results)
       
        this.studentNameService.saveTeacherComment(this.teacherComments).subscribe({
            next(data){
                console.log('Comment Save Successfully::', data)
            },
            error (err){
                console.log('While Saving Comment got error::', err)
            }
        })
        // now you need to save this results string value to the teacher comments table.

    }

    generatePTM(data) {

    }

    generateSupervisorComments(data) {

    }

    generateTestRecordTable(data) {

    }


}

