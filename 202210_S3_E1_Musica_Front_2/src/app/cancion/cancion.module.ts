import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionListComponent } from './cancion-list/cancion-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CancionListComponent],
  exports: [CancionListComponent]
})
export class CancionModule { }
