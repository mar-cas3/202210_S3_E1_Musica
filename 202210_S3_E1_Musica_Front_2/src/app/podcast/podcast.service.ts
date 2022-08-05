import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Capitulo } from '../capitulo/capitulo';
import { PodcastDetail } from './podcast-detail';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  private apiUrl: string = environment.baseUrl + 'podcasts'

  constructor(private http: HttpClient) {}

  getPodcasts(): Observable<PodcastDetail[]> {
    return this.http.get<PodcastDetail[]>(this.apiUrl)
    .pipe(catchError((err) => throwError(() => new Error ('error en el servicio')))
    );
  }

  getPodcast(id: number): Observable<PodcastDetail> {
    return this.http.get<PodcastDetail>(this.apiUrl + '/' + id);
  }

  getCapitulosOfPodcast(id: number): Observable<Capitulo[]> {
    return this.http.get<Capitulo[]>(this.apiUrl + '/' + id + '/capitulos');
  }
}
