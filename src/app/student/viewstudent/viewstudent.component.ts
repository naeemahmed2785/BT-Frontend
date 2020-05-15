import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StudentService } from "src/app/services/student.service";
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: "app-viewstudent",
  templateUrl: "./viewstudent.component.html",
  styleUrls: ["./viewstudent.component.css"],
})
export class ViewstudentComponent implements OnInit {
  refNumber;
  students: Array<any> = [];
  id;
  studentComments: Array<any> = [];
  studentTestRecord: Array<any> = [];
  StudentRecords: Array<any> = [];
  answers;

  constructor(
    private _route: ActivatedRoute,
    private studentServeice: StudentService,
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((data) => {
      this.refNumber = data.ref;
      this.id = data.id;
    });
    this.studentServeice.viewStudentByRef(this.id).subscribe((data) => {
      this.students = data[0];
      this.answers = data[1].map((item) => {
        return { subject: item.SubjectName, ...JSON.parse(item.Answer) };
      });
      console.log(this.answers);
      // this.studentComments = data[1];
      // this.studentTestRecord = data[2];
      // this.StudentRecords = this.studentComments.concat(this.studentTestRecord);
      // this.StudentRecords = this.sortByDate(this.StudentRecords);
    });
  }
  sortByDate(array) {
    return array.sort((a, b) => (a.CreatedDate > b.CreatedDate ? 1 : -1));
  }

  generateComments(ans) {
    return this.answerService.generateTeacherComments(ans);
  }

  isTeacherComments(ans) {
    return ans.type === 'TeacherComments';
  }

  isTestRecord(ans) {
    return ans.type === 'TestRecord';
  }
}
