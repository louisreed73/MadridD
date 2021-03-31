import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
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
      switchMap(v=>{
        return this.http.get<any>(`${url}/?q=${v}`)
        .pipe(
          catchError(this.handleError)
        )
      }),
      
    )
    .subscribe(d=>{
      console.log(d,this)
      this.productos$.next(d);
    },
    (e)=>{
      this.productos$.next(e);
    }
    )
   }

   handleError(e) {
     console.log(e);
     return throwError(e)
   }


}
