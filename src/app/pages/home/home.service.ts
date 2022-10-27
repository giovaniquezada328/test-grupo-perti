import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Embedded, Movie, Show } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl: string = environment.apiMovie;
  constructor(private http: HttpClient) { }

  list(): Observable<Movie[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Movie[]>(`${this.apiUrl}/schedule/full`);
  }

  searchLike(name: string): Observable<Embedded[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Embedded[]>(`${this.apiUrl}/search/shows?q=${name}`);
  }
}
