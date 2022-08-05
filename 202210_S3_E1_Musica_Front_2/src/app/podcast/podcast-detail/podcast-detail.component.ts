import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDetail } from '../podcast-detail';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.css']
})
export class PodcastDetailComponent implements OnInit {

  podcastId!: number;
  @Input() podcastDetail!: PodcastDetail;

  constructor(private route: ActivatedRoute, private podcastService: PodcastService) { }

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

  getPodcast() {
    this.podcastService.getPodcast(this.podcastId).subscribe((podcast) => {
      this.podcastDetail = podcast;
    });
  }

  ngOnInit() {
    if(this.podcastDetail === undefined) {
      this.podcastId = +this.route.snapshot.paramMap.get('id')!;
      if(Number.isInteger(this.podcastId) && this.podcastId > 0) {
        if (this.podcastId) {
          this.getPodcast();
        }
      }
    }
  }
}
