import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ManageFormsService } from 'src/app/services/manage-forms.service';
import { observable } from 'rxjs';
import { isTemplateExpression, validateLocaleAndSetLanguage, isLabeledStatement, createStringLiteral } from 'typescript';
import { utf8Encode } from '@angular/compiler/src/util';

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
  outputStatement = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder,
    private formService: ManageFormsService) { }

  ngOnInit() {
    this.formService.getSubject().subscribe(data => this.subjects = data);
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
      label: new FormControl('', [Validators.required]),
      required: new FormControl(false)

    });
    question.get('type').valueChanges.subscribe(value => {
      if (value === 'radio' || value === 'checkbox' || value === 'dropdown') {
        question.addControl('outputStatement', this.outputStatement);
        const options = new FormArray([]);
        options.push(this.fb.group({
          label: new FormControl('')
        }))
        question.addControl('options', options);
      } else {
        question.removeControl('options');
        question.removeControl('outputStatement');
      }
    })
    this.questions.push(question);
  }

  ifControlExist(form, controlName) {
    return form.controls[controlName] ? true : false;
  }

  ifOptionsExist(question) {
    return question.controls['options'] ? true : false;
  }


  onAddOptions(question) {
    const option = this.fb.group({
      label: new FormControl('')
    })
    question.get('options').push(option);
  }

  onRemoveOption(optionForm, j) {
    if (confirm('Are you sure you want to remove this option ?')) {
      optionForm.removeAt(j);
    }
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
          return { ...opt, key: this.camelize(opt.label) }
        })
      }
      if (q.hasOwnProperty('type')) {
        const obj = Object.assign({ name: this.camelize(q.label), ...q })
        return obj;
      }
      return q;
    })

    const formValue = myQuestionnaire[0].formName;
    myQuestionnaire.push({ label: 'Date', name: 'createdDate', type: 'date', required: true });
    myQuestionnaire.push({ type: 'hidden', value: formValue, name: 'type' });

    console.log(myQuestionnaire)
    this.formService.saveQuestionnaire((myQuestionnaire)).subscribe(data => {
      let response = data;
      console.log('response body from backend', response)
    })
  }

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }


  previewQuestionnaire() {

  }

}
