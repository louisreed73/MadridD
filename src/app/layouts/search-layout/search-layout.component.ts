import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CombinacionService } from 'src/app/services/combinacion.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { log } from 'src/app/utilities/utilities';


@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.scss']
})
export class SearchLayoutComponent implements OnInit, OnDestroy {

  pagina:number;
  spinner$:Subject<boolean>=this.spinner.requestSpinner$;
  pagina$:Subject<number>;
  paginaSub:Subscription;
  stopScroll:boolean;
  stopScrollSub:Subscription;
  // total:boolean=false;



  constructor(
    private combinado: CombinacionService,
    private spinner: SpinnerService

  ) { 

  }

  ngOnInit() {
    this.paginaSub=this.combinado.pagina$
    .pipe(
      tap((numPag) => {
        this.pagina=numPag
        log(numPag,"Este es el número de página","pink")
      })
      )
      .subscribe();

      this.stopScrollSub==this.combinado.stopScroll$
      .subscribe(
        mustStop=>{
          this.stopScroll=mustStop;
        }
      );
    }

    
    onScroll() {
      log(null,"Haciendo scrol!!!","pink");
      // this.pagina=1;
      // ++this.pagina;
      // log(this.pagina,"Este es el número de página","pink");
      // if(!this.stopSpinner) {
        
        
        this.combinado.stopScroll$.next(true);
        this.combinado.pagina$.next(this.pagina + 1);
        console.log(`%cDesactivado Scroll Infinito!!!!`,"lime");
        console.log(this.pagina);
      // }
    // this.spinner.requestSpinner$.next(true)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paginaSub.unsubscribe();
    this.stopScrollSub.unsubscribe();
    // this.isTotalListSub.unsubscribe()
  }


}
