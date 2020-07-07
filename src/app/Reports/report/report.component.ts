import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
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

  dueArray = [];

  _listFilter;
  get listFilter() {
    console.log(this._listFilter)
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.reportData = this.listFilter ? this.performFilter(this.listFilter) : this.reportData;
  }

  filteredStudent;

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
    this.subjectService.getAll().subscribe((data: any) => {
      this.subjects = data;
    })
  }

  refreshData() {
    if (this.selectedSubject && this.reportName) {
      this.subjectService.getReportBySubjectId(this.selectedSubject, this.reportName, this.weeksDue).subscribe(data => {
        this.reportData = data;
        this.filteredStudent = this.reportData
      })
    }
  }
  performFilter(filterBy) {
    return this.reportData.filter((student) =>
      student.RefNumber.indexOf(filterBy) !== -1);
  }
}
