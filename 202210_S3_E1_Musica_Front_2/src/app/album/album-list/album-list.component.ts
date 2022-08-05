import { Component, OnInit } from '@angular/core';
import { Creador } from 'src/app/creador/creador';
import { AlbumDetail } from '../album-detail';
import { AlbumService } from '../album.service';
// import { NgJoinPipeModule } from 'angular-pipes';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Array<AlbumDetail> = [];
  allAlbums: Array<AlbumDetail> = [];
  selectedAlbum!: AlbumDetail;
  searchText:any;

  constructor(private albumService: AlbumService) { }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe(
      {
        next: albums => { this.albums = albums; this.allAlbums = albums; this.selectedAlbum = this.albums[0];},
        error: e => console.log(e)
      });
  }

  getArtistsAsStr(artistas: Creador[]): string[] {
    let artistasStr: string[] = [];
    if(artistas.length > 0) {
      let maxNumShow: number = 2;
      artistas.sort((a1, a2) => a1.id - a2.id);
      artistasStr.push(artistas[0].nombre);
      if (artistas.length > maxNumShow) {
        artistasStr.push("...");
      }
    }
    return artistasStr;

  }

  filterByAlbumTitle() {
    this.albums = this.allAlbums.filter(elem => elem.titulo.toLowerCase().match(this.searchText.toLowerCase()));
  }

  sortAsc() {
    if(this.allAlbums != this.albums) {
      this.albums = this.albums.sort((a1, a2) => a1.titulo.localeCompare(a2.titulo));
    } else {
      this.albums = this.allAlbums.sort((a1, a2) => a1.titulo.localeCompare(a2.titulo));
    }

  }

  sortDesc() {
    if(this.allAlbums != this.albums) {
      this.albums = this.albums.sort((a1, a2) => a2.titulo.localeCompare(a1.titulo));
    } else {
      this.albums = this.allAlbums.sort((a1, a2) => a2.titulo.localeCompare(a1.titulo));
    }
  }


  onSelected(album: AlbumDetail): void {
    this.selectedAlbum = album;
  }

  ngOnInit() {
    this.getAlbums();
  }

}
