import { Component, OnInit } from '@angular/core';
import { newStudent } from '../model/newStudent.model';
import { StudentNameService } from '../services/student-name.service'


@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

regStudent : newStudent = new newStudent();
subjects ;
values = [];
  constructor( private httpNewStudent: StudentNameService){}

  ngOnInit() {
    this.httpNewStudent.getSubject().subscribe(data => {
       this.subjects = data;
       console.log(this.subjects)
    })
  }
  checkBoxes(event){
    if(event.target.checked) {
      this.values.push(event.target.value);
    } else {
      const filtered = this.values.filter((item) => { return item !== event.target.value});
      this.values=filtered;
    }
    this.regStudent.subject = this.values
  }
  regNewStudentFunction(){
    console.log('Got data in function',this.regStudent)
    this.httpNewStudent.saveNewStudent(this.regStudent).subscribe({
      next(data){
        console.log('data save Successfully', data)
      },
      error (err) {
        console.log('Got error while saving data', err)
      }
    })
  }
}
