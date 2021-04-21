import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "../../sharedComponents/spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FijarDirective } from "src/app/directives/fijar.directive";
import { FiltroComponent } from '../../sharedComponents/filtro/filtro.component';
import { AutocompleteComponent } from '../../sharedComponents/autocomplete/autocomplete.component';

@NgModule({
     declarations: [
          SpinnerComponent,
          FijarDirective,
          AutocompleteComponent,
          FiltroComponent,

          ],
     imports: [
          CommonModule,
          FormsModule, 
          ReactiveFormsModule,
          MatProgressSpinnerModule, 
     ],
     exports: [
          FormsModule, 
          ReactiveFormsModule,
          SpinnerComponent, 
          MatProgressSpinnerModule, 
          FiltroComponent,
          FijarDirective,
          AutocompleteComponent
     ],
})
export class SharedUtilitiesModule {}
