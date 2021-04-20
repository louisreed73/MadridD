import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "../../sharedComponents/spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material";
import { FiltrosComponent } from "../../sharedComponents/filtros/filtros.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FijarDirective } from "src/app/directives/fijar.directive";
import { FiltroComponent } from '../../sharedComponents/filtro/filtro.component';
import { AutocompleteComponent } from '../../sharedComponents/autocomplete/autocomplete.component';

@NgModule({
     declarations: [
          SpinnerComponent,
          FiltrosComponent,
          FijarDirective,
          FiltroComponent,
          AutocompleteComponent,

          ],
     imports: [
          CommonModule, 
          ReactiveFormsModule,
          MatProgressSpinnerModule, 
     ],
     exports: [
          ReactiveFormsModule,
          SpinnerComponent, 
          MatProgressSpinnerModule, 
          FiltrosComponent,
          FiltroComponent,
          FijarDirective,
          AutocompleteComponent
     ],
})
export class SharedUtilitiesModule {}
