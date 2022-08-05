import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreadorDetailComponent } from './creador-detail/creador-detail.component';
import { CreadorListComponent } from './creador-list/creador-list.component';


const routes: Routes = [{
  path: 'artist-author',
  children: [
    // {
    //   path: 'create',
    //   component: BookCreateComponent
    // },
    {
      path: 'list',
      component: CreadorListComponent
    },
    {
      path: ':id',
      component: CreadorDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreadorRoutingModule { }
