import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocsEscritosService {

  docsEscritosSource$:BehaviorSubject<{}> = new BehaviorSubject({});
  documentosEscritosLength$: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() { }
}
