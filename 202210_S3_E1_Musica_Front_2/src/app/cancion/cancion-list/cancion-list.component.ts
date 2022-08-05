import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/album/album.service';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-cancion-list',
  templateUrl: './cancion-list.component.html',
  styleUrls: ['./cancion-list.component.css']
})
export class CancionListComponent implements OnInit {

  @Input() albumId!: number;
  @Input() canciones!:Array<Cancion>;

  constructor(private albumService: AlbumService) { }

  getSongsOfAlbum() {
    this.albumService.getSongsOfAlbum(this.albumId).subscribe((canciones) => {
      this.canciones = canciones;
      this.canciones.sort((song1, song2) => song2.id - song1.id);
    });

  }

  ngOnInit() {
    this.canciones.sort((song1, song2) => song1.id - song2.id);
  }

}
