import { Component, OnInit } from '@angular/core';
import { Comments, data, Show } from 'src/app/scienceConstant';
import { FormArray, FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
  studentPTM: Array<any>= [];
  student: Array<any>= [];


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
    // const filter = this.studentPTM.map(item => {
    //      return item.contacts[0].topic;
    //   })
      
  }

  addContact() {
    this.onChanges()
    // collect the data here.
    // this.studentPTM.push()
    // and clear the data object.
    this.studentPTM.push({
      parent: this.showComments.parent,
      subjects:this.showComments.subjects,
      topic: this.showComments.topic,
      progress: this.showComments.progress,
      usually: this.showComments.usually,
      test: this.showComments.pace,
      testResults: this.showComments.testResults,
      understanding: this.showComments.understanding,
      app:this.showComments.application,
      maths:this.showComments.maths,
      practical: this.showComments.practical,
      workbook: this.showComments.workbook,
      structured: this.showComments.structured,
      moles: this.showComments.moles,
      formula: this.showComments.formula,
      unit: this.showComments.unit,
      balancing: this.showComments.balancing
    
    });
    
    this.contactList.push(this.createContact());
    
    this.showComments = new Comments();
  }

  clearForm() {
    
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

  understandingofKnowledge(event) {
    const value = event.target.value;
    const localTopic = "understandingofKnowledge";
    this.showComments.understanding = this.getComments(value, localTopic)

  }

  applicationofKnowledge(event){
    const value = event.target.value;
    const localTopic = "applicationofKnowledge";
    this.showComments.application = this.getComments(value, localTopic)
  }

  mathsSkills(event){
    const value = event.target.value;
    const localTopic = "mathSkills";
    this.showComments.maths = this.getComments(value, localTopic)
  }
 
  practicalKnowledge(event) {
    const value = event.target.value;
    const localTopic = "practicalknowledge";
    this.showComments.practical = this.getComments(value, localTopic)
  }

 

  mistakes(propName, event) {
    let check = this.showComments[propName] = event.target.checked;
    if (check === false) {
      return this.showComments[propName] = " ";
    } else { 
      let value = event.target.value;
      let localTopic = "workbookMistakes";
      this.showComments[propName] = this.getComments(value, localTopic)

    }
  }

  Calulations(propName, event) {
    let check = this.showComments[propName] = event.target.checked;
    if (check === false) {
      return this.showComments[propName] = " ";
    }else {
      let value = event.target.value;
      let localTopic = "calculations";
      this.showComments[propName] = this.getComments(value, localTopic);
    }
  }

  improveHomework(propName, event) {
    let check = this.commentShown[propName] = event.target.checked;
    if (check === false) {
      return this.commentShown[propName] = " ";
    } else {
      let value = event.target.value;
      
      this.commentShown[propName] = this.getComments(value, this.localTopic);
    }
  }

  concentrationBehave(prop, event) {
    const check = this.commentShown[prop] = event.target.checked;
    console.log(check)
    if (check === false) {
      return this.commentShown[prop] = ' ';
    } else {
      const value = event.target.value;
      const localTopic = 'concentrationBehave';
      this.commentShown[prop] = this.getComments(value, localTopic);
    }

  }
  overallPerformance(propName, event) {
    const value = event.target.value;
    const local = 'overall';
    this.commentShown[propName] = this.getComments(value, local);
  }
  
  handWriting(event){
    const value = event. target.value;
    const localTopic = "handWriting";
    this.commentShown.handWriting = this.getComments(value, localTopic);
  }

  spelling(event) {
    const value = event.target.value;
    const localTopic = "Spelling";
    this.commentShown.spelling = this.getComments(value, localTopic)
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
