import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Creador } from 'src/app/creador/creador';
import { AlbumDetail } from '../album-detail';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  albumId!: number;
  @Input() albumDetail!: AlbumDetail

  constructor(private route:ActivatedRoute, private albumService:AlbumService) { }

  getAlbum() {
    this.albumService.getAlbum(this.albumId).subscribe((album) => {
      this.albumDetail = album;
    });
  }

  getArtistsAsStr(artistas:Creador[]):string[] {
    let artistasStr:string[] = [];
    for(let artista of artistas) {
      artistasStr.push(artista.nombre);
    }
    return artistasStr;

  }

  ngOnInit() {
    if(this.albumDetail === undefined) {
      this.albumId = +this.route.snapshot.paramMap.get('id')!;
      if(Number.isInteger(this.albumId) && this.albumId > 0) {
        if(this.albumId) {
          this.getAlbum();
        }
      }
    }
  }

}
