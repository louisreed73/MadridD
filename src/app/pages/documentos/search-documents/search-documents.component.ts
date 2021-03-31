import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';

const range=(start,end)=>{
  return Array.from(Array((end-start) + 1).fill(0),(v,i)=>start+i)
}

@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.scss']
})
export class SearchDocumentsComponent {



  documentos$=this.documentos.productos$;
  

  constructor(private documentos: DocumentosService) { 
    

  }
  


  isArray(obj) {
    return Array.isArray(obj)
  }

}
