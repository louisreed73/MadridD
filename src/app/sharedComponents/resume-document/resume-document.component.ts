import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-document',
  templateUrl: './resume-document.component.html',
  styleUrls: ['./resume-document.component.scss']
})
export class ResumeDocumentComponent implements OnInit {

  @Input() documento:any;
  constructor() { }

  ngOnInit() {

    console.log(this.documento)
  }

}
