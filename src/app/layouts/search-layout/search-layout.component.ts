import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.scss']
})
export class SearchLayoutComponent implements OnInit, OnDestroy {

  Subc: Subscription;
  searchInput = new FormControl();
  // inputString:string;

  constructor(private documentos: DocumentosService) { }

  ngOnInit() {
    this.Subc=this.searchInput.valueChanges
    .pipe(
      debounceTime(500),
      tap(v=>{
        console.log(JSON.stringify(v,null,2)); 
      })
      )
      .subscribe(inp=>{
        this.documentos.inputAndFiltersData$.next({
          searchInput:inp,
          host:this
        })
        this.inputString=inp;
      });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.Subc.unsubscribe();
  }

}
