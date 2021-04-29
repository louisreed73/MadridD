import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  documentosInfo$:Subject<any>=new Subject();

  httpErrorInfo$:Subject<any>=new Subject();

  constructor() { }
}
