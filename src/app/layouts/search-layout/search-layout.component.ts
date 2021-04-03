import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CombinacionService } from 'src/app/services/combinacion.service';
import { InfiniteScrollService } from 'src/app/services/infinite-scroll.service';
import { log } from 'src/app/utilities/utilities';


@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.scss']
})
export class SearchLayoutComponent implements OnInit, OnDestroy {

  pagina:number;
  // spinner$:Subject<boolean>=this.infiniteScroll.requestSpinner$
  pagina$:Subject<number>;
  paginaSub:Subscription;
  stopSpinner:boolean;
  stopSpinnerSub:Subscription;
  // total:boolean=false;



  constructor(
    private combinado: CombinacionService,
    private infiniteScroll: InfiniteScrollService

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

      this.stopSpinnerSub==this.combinado.stopSpinner$
      .subscribe(
        mustStop=>{
          this.stopSpinner=mustStop;
        }
      );
    }

    
    onScroll() {
      log(null,"Haciendo scrol!!!","pink");
      // this.pagina=1;
      // ++this.pagina;
      log(this.pagina,"Este es el número de página","pink");
      // if(!this.stopSpinner) {

        this.combinado.pagina$.next(++this.pagina);
        console.log(this.pagina);
      // }
    // this.infiniteScroll.requestSpinner$.next(true)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paginaSub.unsubscribe();
    this.stopSpinnerSub.unsubscribe();
    // this.isTotalListSub.unsubscribe()
  }


}
