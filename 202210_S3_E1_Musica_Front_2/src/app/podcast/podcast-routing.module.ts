import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';


const routes: Routes = [{
  path: 'album-podcast/podcasts',
  children: [

    {
      path: ':id',
      component: PodcastDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule { }
