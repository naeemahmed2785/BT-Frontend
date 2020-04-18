import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentNameService } from 'src/app/services/student-name.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  refNumber;
  student: Array<any>= [];
  studentComments: Array<any> = [];
  id;

  constructor(private _route: ActivatedRoute, private studentServeice: StudentNameService) { }

  ngOnInit() {
    this._route.params.subscribe(data => {
      console.log(data)
      this.refNumber = data.ref;
      this.id = data.id;
    });
    this.studentServeice.viewStudentByRef(this.id).subscribe(data => {
      console.log(data)
      let data1 = data[0];
      let data2 = data[1];
      console.log('student data', this.student = data1)
      console.log('student Comments', this.studentComments = data2)
      
    })
  }

}
