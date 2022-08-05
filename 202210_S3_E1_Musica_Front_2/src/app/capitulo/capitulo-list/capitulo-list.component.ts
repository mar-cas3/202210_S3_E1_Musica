import { Component, Input, OnInit } from '@angular/core';
import { PodcastService } from 'src/app/podcast/podcast.service';
import { Capitulo } from '../capitulo';

@Component({
  selector: 'app-capitulo-list',
  templateUrl: './capitulo-list.component.html',
  styleUrls: ['./capitulo-list.component.css']
})
export class CapituloListComponent implements OnInit {

  @Input() podcastId!: number;
  @Input() capitulos: Array<Capitulo> = [];

  constructor(private podcastService: PodcastService) { }

  public transformDuration(duration: number): string {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  public getCapitulosOfPodcast(): void {
    this.podcastService.getCapitulosOfPodcast(this.podcastId).subscribe((capitulos) => {
      this.capitulos = capitulos;
    });
  }

  public sortCaps() {
    this.capitulos.sort((capitulo1, capitulo2) => capitulo1.id - capitulo2.id);
  }

  ngOnInit() {
  }

}
