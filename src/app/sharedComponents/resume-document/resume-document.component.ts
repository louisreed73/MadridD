import { Component, Input, OnInit } from '@angular/core';
import { SearchTriggerService } from 'src/app/services/search-trigger.service';

@Component({
  selector: 'app-resume-document',
  templateUrl: './resume-document.component.html',
  styleUrls: ['./resume-document.component.scss']
})
export class ResumeDocumentComponent implements OnInit {

  @Input() documento:any;
  fuzzyString:string;
  constructor(
    private searchTriggerServ:SearchTriggerService
  ) { }

  ngOnInit() {

    console.log(this.documento)
  }

  fuzzySearch() {
    console.log("fuzzy searching!!!!");

    this.searchTriggerServ.fuzzySearch.next(this.fuzzyString)
  }

}
