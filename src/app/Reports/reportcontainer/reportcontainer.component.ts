import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reportcontainer',
  templateUrl: './reportcontainer.component.html',
  styleUrls: ['./reportcontainer.component.css']
})
export class ReportContainerComponent implements OnInit {
  selectedReport;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(data => {
      this.selectedReport = data.rname;
    })

  }

}
