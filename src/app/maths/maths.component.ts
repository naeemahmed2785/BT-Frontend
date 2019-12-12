import { Component, OnInit } from '@angular/core';
import { data, CommentsType } from '../constant';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']

})

export class MathsComponent implements OnInit {
  userComments: CommentsType = new CommentsType();
  changeButton: any = true;
  teacher= 'Teacher Comments: ';
  selectedBehavior = '';
  selectedPace = '';
  selectedWork = '';
  selectedPunctuality = '';
  selectedCheck = '';
  selectedUnder = '';




  private getComments(state, topic): string {
    const filtered = data[topic].filter(item => {
      return item.state === state || item.state == 'late';
    });
    return  filtered[0].description;
  }

  constructor(private clipboardService: ClipboardService) { }

  ngOnInit() {
  }

  behaviorChanged(event) {
    const state = event.target.value;
    const localTopic = 'behaviour'
    this.userComments.behavior = this.getComments(state, localTopic);
    this.selectedBehavior = state;
  }

  paceChanged(event) {
    const state = event.target.value;
    const localTopic = 'workspace'
    this.userComments.pace = this.getComments(state, localTopic);
    this.selectedPace = state;
  }

  workChanged(event) {
    const state = event.target.value;
    const localTopic = 'homeWork'
    this.userComments.work = this.getComments(state, localTopic);
    this.selectedWork = state;

  }

  punctualityChanged(event) {
    let state = event.target.value;
    let localTopic = 'Punctuality'
    this.userComments.punctuality = this.getComments(state, localTopic);
    let str = this.userComments.punctuality;
    let findStr = /xxx/gi;
    let newStr = str.replace(findStr, state);
    this.userComments.punctuality = newStr;
    this.selectedPunctuality = newStr;
  }
  onBlur(event) {
    let state = event.target.value = "";
  }
  checkboxes(prop,event){
    let check = this.userComments[prop]= event.target.checked;
    if (check=== false){
      return this.userComments[prop] = " ";
    }else {
      let state = event.target.value;
      let localTopic= 'concentrationQuality'
      this.userComments[prop] = this.getComments(state, localTopic)
      this.selectedCheck = state;
    }
  }
  understanding(event){
    let state = event.target.value;
    let localTopic= 'Understanding';
    this.userComments.understanding=this.getComments(state,localTopic);
    this.selectedUnder = state;
  }

  copyToClipboard() {
    let div = document.getElementById('emp').textContent
    this.clipboardService.copyFromContent(div);
  }

  resetForm() {
    // document.getElementById('emptyForm').reset();
    // document.getElementById('emp').innerHTML = "";
    window.location.reload();
  }
  changeText() {
    this.changeButton = !this.changeButton;
  }
  successCopied() {
    this.changeText()
    this.copyToClipboard()
  }
 
}
