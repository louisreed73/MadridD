import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PruebaAPIService {

  constructor(
    private http:HttpClient
  ) { 

    
  }

  // getTiposDocumentales() {
  //   return this.http.get<any>("/api/documentos")
  //   .pipe(
  //     map(({data})=>data.tiposDocumentales.map(it=>it.descripcion)),
  //     tap(d=>{
  //       console.log(d)
  //     })
  //   )    
  // }
}
