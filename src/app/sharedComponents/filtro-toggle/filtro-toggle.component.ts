import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-toggle',
  templateUrl: './filtro-toggle.component.html',
  styleUrls: ['./filtro-toggle.component.scss']
})
export class FiltroToggleComponent implements OnInit {

  // @Input() toggle:any; 

  // @ContentChild("toggleEl", {static:true}) input:ElementRef
  
  constructor() { }

  ngOnInit() {

    // console.log(this.input)
  }

}
