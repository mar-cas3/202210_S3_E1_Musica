import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { AlbumDetail } from './album-detail';
import { Cancion } from '../cancion/cancion';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl: string = environment.baseUrl + 'albums'

  constructor(private http: HttpClient) {}

  getAlbums():Observable<AlbumDetail[]> {
    return this.http.get<AlbumDetail[]>(this.apiUrl)
    .pipe(catchError((err) => throwError(() => new Error ('error en el servicio')))
    );

  }

  getAlbum(id:number): Observable<AlbumDetail> {
    return this.http.get<AlbumDetail>(this.apiUrl + '/' + id);
  }

  getSongsOfAlbum(id:number): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.apiUrl + '/' + id + '/canciones');

  }

}
