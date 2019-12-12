import { Component, OnInit } from '@angular/core';
import { Comments, data } from 'src/app/scienceConstant';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  showComments: Comments = new Comments();
  changeButton: any = true;
  selectedprogress = " ";
  localTopic = 'improvehomework';
  studentPTM: any [];

  public contactList: FormArray;
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }


  createContact(): FormGroup {
    return this.fb.group({
      chos: [''],
      topic: [''],
      pro1: ['']
    });
    topic = this.form.controls['topic'].value;
    pro1 = this.form.controls['pro1'].value;
  }
  get controlFormGroup() {
    return this.form.get('contacts') as FormArray;
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: [null],
      contacts: this.fb.array([this.createContact()]),
    });

    this.contactList = this.form.get('contacts') as FormArray;
  }

  addContact() {
    // collect the data here.
    // this.studentPTM.push()
    // and clear the data object.
    this.contactList.push(this.createContact())
  }
  callingFunction(){
    this.studentPTM = this.form.value;
    console.log("Array : ",this.studentPTM)
  }

   getComments(value, topic): string {
    const filtered = data[topic].filter(item => {
      return item.state === value || item.state == 'name';
    })
    return filtered[0].description;
  }

  removeContact(index) {
    this.contactList.removeAt(index);
  }
  childName(event) {
    let state = event.target.value;
    let localTopic = 'childName'
    this.showComments.parent = this.getComments(state, localTopic);
    let str = this.showComments.parent;
    let findStr = /xxx/gi;
    let newStr = str.replace(findStr, state);
    this.showComments.parent = newStr;
  }
  onBlur(event) {
    let value = event.target.value = "";
  }
  progress(event) {
    let value = event.target.value;
    let localTopic = 'progress';
    this.showComments.progress = this.getComments(value, localTopic);
    this.selectedprogress = value;
  }

  usually(event) {
    let value = event.target.value;
    let localTopic = 'usually';
    this.showComments.usually = this.getComments(value, localTopic);
  }
  improveHomework(propName, event) {
    let check = this.showComments[propName] = event.target.checked;
    console.log(check)
    if (check === false) {
      return this.showComments[propName] = " ";
    } else {
      let value = event.target.value;
      this.showComments[propName] = this.getComments(value, this.localTopic);
    }
  }
  testResults(event) {
    let value = event.target.value;
    let localTopic = 'testResults';
    this.showComments.testResults = this.getComments(value, localTopic)
  }
  testPace(event) {
    let value = event.target.value;
    let localTopic = 'testPace';
    this.showComments.pace = this.getComments(value, localTopic)
  }
  concentrationBehave(prop, event) {
    let check = this.showComments[prop] = event.target.checked;
    if (check === false) {
      return this.showComments[prop] = " ";
    } else {
      let value = event.target.value;
      let localTopic = 'concentrationBehave';
      this.showComments[prop] = this.getComments(value, localTopic);
    }

  }
  overallPerformance(propName, event) {
    let value = event.target.value;
    let local = "overall";
    this.showComments[propName] = this.getComments(value, local);
  }
  copyToClipboard() {

  }

  changeText() {
    this.changeButton = !this.changeButton;
  }
  successCopied() {
    this.changeText()
  }
  resetForm() {
    window.location.reload();
  }

}
