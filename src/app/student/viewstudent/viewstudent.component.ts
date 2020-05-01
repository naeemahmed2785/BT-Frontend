import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StudentNameService } from "src/app/services/student-name.service";

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

  constructor(
    private _route: ActivatedRoute,
    private studentServeice: StudentNameService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((data) => {
      console.log(data);
      this.refNumber = data.ref;
      this.id = data.id;
    });
    this.studentServeice.viewStudentByRef(this.id).subscribe((data) => {
      this.students = data[0];
      this.studentComments = data[1];
      this.studentTestRecord = data[2];
      this.StudentRecords = this.studentComments.concat(this.studentTestRecord);
      this.StudentRecords = this.sortByDate(this.StudentRecords);
      console.log(this.StudentRecords);
    });
  }
  sortByDate(array) {
    return array.sort((a, b) => (a.CreatedDate > b.CreatedDate ? 1 : -1));
  }
}
