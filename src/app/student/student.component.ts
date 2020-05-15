import { Component, OnInit, Output, Input, EventEmitter, HostListener } from '@angular/core';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentRef;
  studentData;
  @Output() student = new EventEmitter();
  studentId;



  constructor(private _http: StudentService) { }

  ngOnInit() {
  }
  searchNameById(event) {
    console.log('i m in', this.studentRef)
    return this._http.getStudentByRef(this.studentRef).subscribe(data => {
      this.studentData = data;
      console.log('I m Back with data ', this.studentData)

    })
  }
  selectedID() {
    console.log('got id on change::', this.studentId)
    this.student.emit(this.studentId)
  }
}
