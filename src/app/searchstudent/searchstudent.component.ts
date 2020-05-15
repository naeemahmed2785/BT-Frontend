import { Component, OnInit } from '@angular/core';
import { searchStudent } from '../model/searchStudent.model'
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchStudentComponent implements OnInit {
  searchStudents: searchStudent = new searchStudent();
  gotStudentsData;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  searchFunction() {
    return this.studentService.getStudentsData(this.searchStudents).subscribe(data => {
      this.gotStudentsData = data;
      console.log('got data from', this.gotStudentsData)
    })
  }

}
