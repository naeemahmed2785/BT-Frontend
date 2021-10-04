import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { StudentComponent } from 'src/app/student/student.component';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, OnChanges {

  @Input() reportName;
  reportData = [];
  selectedSubject;
  selectedWeek;
  subjects;
  getDate;
  weeksDue;
  date = [];
  dueArray = [];

  // _listFilter;
  // get listFilter() {
  //   return this._listFilter;
  // }
  // set listFilter(value) {
  //   this._listFilter = value;
  //   this.reportData = this.listFilter ? this.performFilter(this.listFilter) : this.reportData;
  // }

  // filteredStudent;

  constructor(
    private _route: ActivatedRoute,
    private subjectService: SubjectService) {

  }


  ngOnChanges(changes: SimpleChanges) {
    this.dueArray = [];
    if (this.reportName === 'PTM') {
      this.dueArray.push({ displayText: '4 Weeks', weeks: 4 });
      this.dueArray.push({ displayText: '6 Weeks', weeks: 6 });
      this.dueArray.push({ displayText: '8 Weeks', weeks: 8 });
    } else {
      this.dueArray.push({ displayText: '2 Weeks', weeks: 2 });
      this.dueArray.push({ displayText: '4 Weeks', weeks: 4 });
      this.dueArray.push({ displayText: '6 Weeks', weeks: 6 });
      this.dueArray.push({ displayText: '8 Weeks', weeks: 8 });
    }
    this.refreshData();

  }

  ngOnInit() {
  // var n = this.date.getFullYear();
  // var x = this.date.getMonth();
  // var y = this.date.getDate();
  // this.date = n + '-'+ x  + '-' + y;
    this.subjectService.getAll().subscribe((data: any) => {
      this.subjects = data;
    })
  }

  refreshData() {
    if (this.selectedSubject && this.reportName) {
      this.subjectService.getReportBySubjectId(this.selectedSubject, this.reportName, this.weeksDue).subscribe(data => {
        this.reportData = data.sort(function(a,b){
          return  a.RefNumber - b.RefNumber;
          });
        //   var filteredList = this.reportData
        //   .map(function(e) {
        //     return {e, dt: e.CreatedDate };
        //   })
        //   .filter(e => e.dt <= new Date());
        
        // console.log(filteredList);

      })
    }
  }
  performFilter() {
  }
}
