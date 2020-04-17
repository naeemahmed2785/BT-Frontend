import { Component, OnInit } from '@angular/core';
import { Comments, data, Show } from 'src/app/scienceConstant';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  showComments: Comments = new Comments();
  commentShown : Show = new Show();
  changeButton: any = true;
  selectedprogress = ' ';
  localTopic = 'improvehomework';
  studentPTM = new Array<any>();

  public contactList: FormArray;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
   }

  createContact(): FormGroup {
    return this.fb.group({
      chos: [null],
      topic:[null],
      pro1: [null],
    });
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

  onChanges(): void{
    const name = this.form.value;
    console.log(' actual array', name)
    this.studentPTM.push(name);
    const filter = this.studentPTM.map(item => {
         return item.contacts[0].topic;
      })
      console.log('Filter Araay',filter);
  }

  addContact() {
    this.onChanges()
    // collect the data here.
    // this.studentPTM.push()
    // and clear the data object.
    this.studentPTM.push({
      parent: this.showComments.parent,
      topic: this.showComments.topic,
      progress: this.showComments.progress,
      usually: this.showComments.usually,
      test: this.showComments.pace,
      testResults: this.showComments.testResults,
      // improve: this.showComments.improve,
      // askMore: this.showComments.askMore,
      // reading: this.showComments.reading,
      // notdoing: this.showComments.notdoing,
      // affect: this.showComments.affect,
      // 
      // 
      // pace: this.showComments.pace,
      // concentration: this.showComments.concentration,
      // talkative: this.showComments.talkative,
      // talkStudent: this.showComments.talkStudent,
      // speak: this.showComments.speak,
      // laugh: this.showComments.laugh,
      // tiredness: this.showComments.tiredness,
      // behave: this.showComments.behave,
      // listen: this.showComments.listen,
      // inappropriate: this.showComments.inappropriate,
      // misBehave: this.showComments.misBehave,
      // attendance: this.showComments.attendance,
      // punctuality: this.showComments.punctuality,
      // ability: this.showComments.ability,
      // additional: this.showComments.additional,
      // parents: this.showComments.parents
    });
   
    this.contactList.push(this.createContact());
    this.showComments = new Comments();
  }
  callingFunction() {
    // this.studentPTM = this.form.value;
    console.log('Array : ', JSON.stringify(this.studentPTM));
  }

    getComments(value, topic): string {
    const filtered = data[topic].filter(item => {
      return item.state === value || item.state === 'name';
    });
    return filtered[0].description;
  }

  removeContact(index) {
    this.contactList.removeAt(index);
  }
  childName(event) {
    const state = event.target.value;
    const localTopic = 'childName';
    this.showComments.parent = this.getComments(state, localTopic);
    const str = this.showComments.parent;
    const findStr = /xxx/gi;
    const newStr = str.replace(findStr, state);
    this.showComments.parent = newStr;
  }
  onBlur(event) {
    const value = event.target.value = '';
  }
  progress(event) {
    const value = event.target.value;
    const localTopic = 'progress';
    this.showComments.progress = this.getComments(value, localTopic);
    this.selectedprogress = value;
  }

  usually(event) {
    const value = event.target.value;
    const localTopic = 'usually';
    this.showComments.usually = this.getComments(value, localTopic);
  }
  improveHomework(propName, event) {
    let check = this.commentShown[propName] = event.target.checked;
    console.log(check)
    if (check === false) {
      return this.commentShown[propName] = " ";
    } else {
      let value = event.target.value;
      
      this.commentShown[propName] = this.getComments(value, this.localTopic);
      console.log(this.commentShown[propName])
    }
  }
  testResults(event) {
    const value = event.target.value;
    const localTopic = 'testResults';
    this.showComments.testResults = this.getComments(value, localTopic);
  }
  testPace(event) {
    const value = event.target.value;
    const localTopic = 'testPace';
    this.showComments.pace = this.getComments(value, localTopic);
  }
  concentrationBehave(prop, event) {
    const check = this.showComments[prop] = event.target.checked;
    if (check === false) {
      return this.showComments[prop] = ' ';
    } else {
      const value = event.target.value;
      const localTopic = 'concentrationBehave';
      this.showComments[prop] = this.getComments(value, localTopic);
    }

  }
  overallPerformance(propName, event) {
    const value = event.target.value;
    const local = 'overall';
    this.showComments[propName] = this.getComments(value, local);
  }
  copyToClipboard() {

  }

  changeText() {
    this.changeButton = !this.changeButton;
  }
  successCopied() {
    this.changeText();
  }
  resetForm() {
    window.location.reload();
  }

}
