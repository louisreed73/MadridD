import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';

const range=(start,end)=>{
  return Array.from(Array((end-start) + 1).fill(0),(v,i)=>start+i)
}

@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.scss']
})
export class SearchDocumentsComponent implements OnInit {

  products:Array<number>=range(12,45);

  documentos$

  constructor(private documentos: DocumentosService) { 

    
    console.log(range(12,30))
  }
  
  ngOnInit() {
    this.documentos$=this.documentos.productos$
    // .subscribe(d=>{
    //   console.log(d)
    // });
    // console.log(this.documentos$)
  }

  isArray(obj) {
    return Array.isArray(obj)
  }

}
