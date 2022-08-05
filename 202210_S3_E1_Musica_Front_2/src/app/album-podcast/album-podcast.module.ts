import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPodcastComponent } from './album-podcast.component';
import { AlbumModule } from '../album/album.module';
import { PodcastModule } from '../podcast/podcast.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgJoinPipeModule } from 'angular-pipes';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    AlbumModule,
    PodcastModule,
    RouterModule,
    NgJoinPipeModule
  ],
  declarations: [AlbumPodcastComponent],
  exports: [AlbumPodcastComponent]
})
export class AlbumPodcastModule { }
