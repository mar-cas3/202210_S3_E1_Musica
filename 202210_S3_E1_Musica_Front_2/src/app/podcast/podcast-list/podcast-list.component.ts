import { Component, OnInit } from '@angular/core';
import { PodcastDetail } from '../podcast-detail';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent implements OnInit {

  podcasts: Array<PodcastDetail> = [];
  allPodcasts: Array<PodcastDetail> = [];
  selectedPodcast!: PodcastDetail;
  searchText: any;

  filtro: HTMLInputElement = <HTMLInputElement>document.getElementById('filtroPodcast')!;

  constructor(private podcastService: PodcastService) { }

  getCreadorNameList(podcast: PodcastDetail): Array<string> {
    let names: Array<string> = [];
    podcast.creadores.forEach(creador => names.push(creador.nombre));
    return names;
  }

  turnNamesToString(names: Array<string>): string {
    let result: string = '';
    names.forEach(name => result += name + ', ');
    return result.substring(0, result.length - 2);
  }

  getPodcasts(): void {
    this.podcastService.getPodcasts().subscribe(
      {
        next: podcasts => { this.podcasts = podcasts; this.allPodcasts = podcasts; this.selectedPodcast = this.podcasts[0];},
        error: e => console.log(e)
      });

  }

  onSelected(podcast: PodcastDetail): void {
    this.selectedPodcast = podcast;
  }

  filterByPodcastTitle() {
    this.podcasts = this.allPodcasts.filter(elem => elem.titulo.toLowerCase().match(this.searchText.toLowerCase()));
  }

  sortAsc() {
    if(this.allPodcasts != this.podcasts) {
      this.podcasts = this.podcasts.sort((a1, a2) => a1.titulo.localeCompare(a2.titulo));
    } else {
      this.podcasts = this.allPodcasts.sort((a1, a2) => a1.titulo.localeCompare(a2.titulo));
    }
  }

  sortDesc() {
    if(this.allPodcasts != this.podcasts) {
      this.podcasts = this.podcasts.sort((a1, a2) => a2.titulo.localeCompare(a1.titulo));
    } else {
    this.podcasts = this.allPodcasts.sort((a1, a2) => a2.titulo.localeCompare(a1.titulo));
    }
  }

  ngOnInit() {
    this.getPodcasts();
  }

}
