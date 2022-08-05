import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreadorDetail } from './creador-detail';

@Injectable({
  providedIn: 'root'
})
export class CreadorService {

  private apiUrl: string = environment.baseUrl + 'creadores'

  constructor(private http: HttpClient) { }

  getCreadores():Observable<CreadorDetail[]> {
    return this.http.get<CreadorDetail[]>(this.apiUrl)
    .pipe(catchError((err) => throwError(() => new Error ('error en el servicio')))
    );
  }

  getCreador(id:number): Observable<CreadorDetail> {
    return this.http.get<CreadorDetail>(this.apiUrl + '/' + id);
  }

}
