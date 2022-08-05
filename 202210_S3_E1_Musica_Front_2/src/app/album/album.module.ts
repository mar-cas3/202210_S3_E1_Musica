import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { CancionModule } from '../cancion/cancion.module';
import { NgJoinPipeModule } from 'angular-pipes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CancionModule,
    NgJoinPipeModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [AlbumListComponent, AlbumDetailComponent],
  exports: [AlbumListComponent]
})
export class AlbumModule { }
