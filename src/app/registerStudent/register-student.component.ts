import { Component, OnInit } from '@angular/core';
import { newStudent } from '../model/newStudent.model';
import { StudentService } from '../services/student.service'
import { SubjectService } from '../services/subject.service';


@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  regStudent: newStudent = new newStudent();
  subjects;
  values = [];
  constructor(private httpNewStudent: StudentService,
    private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.getAll().subscribe(data => {
      this.subjects = data;
    })
  }
  checkBoxes(event) {
    if (event.target.checked) {
      this.values.push(event.target.value);
    } else {
      const filtered = this.values.filter((item) => { return item !== event.target.value });
      this.values = filtered;
    }
    this.regStudent.subject = this.values
  }
  regNewStudentFunction() {
    this.httpNewStudent.saveNewStudent(this.regStudent).subscribe({
      next(data) {
        console.log('data save Successfully', data)
      },
      error(err) {
        console.log('Got error while saving data', err)
      }
    })
  }
}
