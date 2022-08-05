import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumPodcastComponent } from './album-podcast.component';


const routes: Routes = [{
  path: 'album-podcast',
  children: [
    {
      path: 'list',
      component: AlbumPodcastComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumPodcastRoutingModule { }
