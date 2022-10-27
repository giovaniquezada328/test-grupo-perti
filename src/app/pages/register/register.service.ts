import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  dataDummy(): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<User>(`${this.apiUrl}`);
  }
}
