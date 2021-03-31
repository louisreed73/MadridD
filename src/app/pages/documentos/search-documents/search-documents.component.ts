import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';

const range=(start,end)=>{
  return Array.from(Array((end-start) + 1).fill(0),(v,i)=>start+i)
}

@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDocumentsComponent {



  documentos$=this.documentos.documentos$;
  // documentosL$=this.documentos.documentosLength$
  // documentosR$=this.documentos.documentosResoluciones$
  

  

  constructor(private documentos: DocumentosService) { 
    

  }
  


  isArray(obj) {
    return Array.isArray(obj)
  }

}
