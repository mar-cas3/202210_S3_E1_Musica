import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreadorListComponent } from './creador-list/creador-list.component';
import { CreadorDetailComponent } from './creador-detail/creador-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [CreadorListComponent, CreadorDetailComponent],
  exports: [CreadorListComponent, CreadorDetailComponent]
})
export class CreadorModule { }
