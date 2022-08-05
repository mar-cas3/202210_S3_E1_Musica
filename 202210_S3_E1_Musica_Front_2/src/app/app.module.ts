import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumModule } from './album/album.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionModule } from './cancion/cancion.module';
import { CapituloModule } from './capitulo/capitulo.module';
import { CreadorModule } from './creador/creador.module';
import { PodcastModule } from './podcast/podcast.module';
import { AlbumPodcastComponent } from './album-podcast/album-podcast.component';
import { AlbumPodcastModule } from './album-podcast/album-podcast.module';
import { AlbumPodcastRoutingModule } from './album-podcast/album-podcast-routing.module';
import { CreadorRoutingModule } from './creador/creador-routing.module';
import { AlbumRoutingModule } from './album/album-routing.module';
import { PodcastRoutingModule } from './podcast/podcast-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumModule,
    PodcastModule,
    CreadorModule,
    CapituloModule,
    CancionModule,
    AlbumPodcastModule,
    AlbumPodcastRoutingModule,
    CreadorRoutingModule,
    AlbumRoutingModule,
    PodcastRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
