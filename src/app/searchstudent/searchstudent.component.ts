import { Component, OnInit } from '@angular/core';
import { searchStudent } from '../model/searchStudent.model'
import { StudentNameService } from '../services/student-name.service';


@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchStudentComponent implements OnInit {
  searchStudents: searchStudent = new searchStudent ();
  gotStudentsData;
  constructor(private studentNameService: StudentNameService) { }

  ngOnInit() {
  }

  searchFunction() {
  return this.studentNameService.getStudentsData(this.searchStudents).subscribe(data =>{
    this.gotStudentsData = data;
    console.log('got data from', this.gotStudentsData)
    })
  }

}
