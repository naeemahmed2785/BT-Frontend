import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ManageFormsService } from 'src/app/services/manage-forms.service';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {
  listOfForms;
  constructor(
    private manageFormsService: ManageFormsService
  ) { }

  ngOnInit() {
    this.manageFormsService.getFormsList().subscribe(data => {
      this.listOfForms = data
      console.log(this.listOfForms)
    });
  }

  deleteForm (event) {    
    let formId = event.target.value;
    this.manageFormsService.deleteForm(formId).subscribe(data => {
      console.log("DELETED FORM SUCCECFULLY")
    })
  }
}
