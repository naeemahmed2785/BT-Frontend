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
      this.StudentRecords = this.sortByDate(this.answers);
    });
  }

  sortByDate(array) {
    return array.sort((a, b) => (a.createdDate > b.createdDate ? 1 : -1));
  }

  isTestRecord(ans) {
    return ans.type.toLowerCase().indexOf('test record') >= 0;
  }
}
