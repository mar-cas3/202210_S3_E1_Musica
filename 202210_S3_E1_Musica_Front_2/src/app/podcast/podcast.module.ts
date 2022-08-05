import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { CapituloModule } from '../capitulo/capitulo.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CapituloModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PodcastListComponent, PodcastDetailComponent],
  exports: [PodcastListComponent, PodcastDetailComponent],
})
export class PodcastModule { }
