import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapituloListComponent } from './capitulo-list/capitulo-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CapituloListComponent],
  exports: [CapituloListComponent]
})
export class CapituloModule { }
