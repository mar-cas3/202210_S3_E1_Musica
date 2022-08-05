import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumPodcastComponent } from './album-podcast/album-podcast.component';

const routes: Routes = [
  { path: '', component: AlbumPodcastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
