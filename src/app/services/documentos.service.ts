import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

const url = "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos"

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  inputAndFiltersData$:BehaviorSubject<any>=new BehaviorSubject({searchInput:""});
  productos$:BehaviorSubject<any>=new BehaviorSubject({})

  constructor(private http:HttpClient) {

    this.inputAndFiltersData$
    .pipe(
      map(v=>v.searchInput),
      tap(v=>{
        console.log(v)
      }),
      switchMap(v=>this.http.get<any>(`${url}/?q=${v}`)),
      // catchError(this.handleError)
    )
    .subscribe(d=>{
      console.log(d)
      this.productos$.next(d);
    })
   }

   handleError(e):Error {
     throw new Error(e)
   }
}
