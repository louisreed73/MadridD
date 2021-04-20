import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  autocompleteFormG: FormGroup = new FormGroup({});
  @Input() sugerenciasData: Array<string>;
  @Input() autocompleteInstance: number;
  @Output('sugerenciasOut')
  sugerenciasEmit: EventEmitter<Object> = new EventEmitter<Object>();
  sugerencias: Array<string>;
  autoCompleteInputEv$$: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.autocompleteFormG.addControl(
      'autocomplete' + this.autocompleteInstance,
      new FormControl('')
    );
    this.autoCompleteInputEv$$ = this.autocompleteFormG
      .get('autocomplete' + this.autocompleteInstance)
      .valueChanges.pipe(debounceTime(100))
      .subscribe((data) => {
        console.log(data)
        this.sugerencias = this.sugerenciasData.filter((ciudad) => {
          return ciudad.search(new RegExp(`${data}`, 'gi')) !== -1;
        });

        if (data === '') {
          this.sugerencias = [];
        }
      });
  }

  ngOnDestroy(): void {
    this.autoCompleteInputEv$$.unsubscribe();
  }

  getSugerencia(i: number) {
    let selectedTipo = this.sugerencias[i];

    this.sugerenciasEmit.emit({
      selectedTipo,
      instancia: this.autocompleteInstance,
    });
  }
}

