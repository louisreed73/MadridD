import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appFijar]',
})
export class FijarDirective implements OnInit, OnDestroy {
  windowSub: Subscription;
  constructor(
    private elRef: ElementRef,
    private render: Renderer2,
    private _window: Window
  ) {}

  ngOnInit(): void {
    console.log(this._window);
    this.windowSub = fromEvent(this._window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe((e: Event) => {
        let offSet = this._window.pageYOffset;
        if (offSet >= 100) {
          this.render.setAttribute(this.elRef.nativeElement, 'class', 'fijo');
        } else {
          // this.render.setAttribute(this.elRef.nativeElement, 'class', '');
          this.render.removeAttribute(this.elRef.nativeElement, 'class')

        }
      });
  }

  ngOnDestroy(): void {
    this.windowSub.unsubscribe();
  }
}
