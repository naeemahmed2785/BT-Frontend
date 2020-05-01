import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ManageFormsService } from 'src/app/services/manage-forms.service';

@Component({
  selector: 'app-new-form-criteria',
  templateUrl: './new-form-criteria.component.html',
  styleUrls: ['./new-form-criteria.component.css']
})
export class NewFormCriteriaComponent implements OnInit {
  questions: FormArray;
  formOptionsArray: FormArray;
  myGroup: FormGroup;
  canAdd = false;
  subjects;

  constructor(private fb: FormBuilder,
    private formService: ManageFormsService) { }

  ngOnInit() {
    this.questions = new FormArray([]);
    this.questions.push(this.fb.group({
      formName: new FormControl('', [Validators.required]),
      subjectName: new FormControl('', [Validators.required]),
    }))
    this.questions.valueChanges.subscribe(value => {
      this.canAdd = this.questions.status.toLowerCase() === 'valid' ? true : false;
    })
  }

  onAddNewquestion() {
    const question = this.fb.group({
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      label: new FormControl('', [Validators.required]),
      required: new FormControl(false)
    });
    question.get('type').valueChanges.subscribe(value => {
      // text, date, radio, checkbox, dropdown
      if (value === 'radio' || value === 'checkbox' || value === 'dropdown') {
        const options = new FormArray([]);
        options.push(this.fb.group({
          label: new FormControl('')
        }))
        question.addControl('options', options);
      } else {
        question.removeControl('options');
      }
    })
    this.questions.push(question);
  }

  ifControlExist(form, controlName) {
    const control = form.controls[controlName];
    if (control) {
      return true;
    } else {
      return false;
    }
  }

  ifOptionsExist(question) {
    const option = question.controls['options'];
    if (option) {
      return true;
    } else {
      return false;
    }
  }


  onAddOptions(question) {
    const option = this.fb.group({
      label: new FormControl('')
    })
    question.get('options').push(option);
  }

  removeContact(index) {
    if (confirm('This would delete the question. Are you sure?')) {
      this.questions.removeAt(index)
    }
  }

  save() {
    const myQuestionnaire = this.questions.value.map(q => {
      if (q.hasOwnProperty('options')) {
        q.options = q.options.map(opt => {
          return { ...opt, key: opt.label.split(' ').join('').toLowerCase() }
        })
      }
      return q;
    });
    console.log(JSON.stringify(myQuestionnaire));
    // His Behaviour.
    // ['His', 'Behaviour']
    // jion() = hisBehaviour
  }

  previewQuestionnaire() {

  }

}
