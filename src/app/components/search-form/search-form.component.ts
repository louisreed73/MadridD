import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  Subc: Subscription;
  searchInput = new FormControl();
  // inputString:string;

  constructor(private documentos: DocumentosService) { }

  ngOnInit() {
    this.Subc=this.searchInput.valueChanges
    .pipe(
      debounceTime(300),
      tap(v=>{
        console.log(JSON.stringify(v,null,2)); 
      })
      )
      .subscribe(inp=>{
        this.documentos.inputAndFiltersData$.next({
          searchInput:inp,
          host:this
        })
        // this.inputString=inp;
      });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.Subc.unsubscribe();
  }

}
