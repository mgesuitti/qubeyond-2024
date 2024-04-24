import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private apiUrl = 'https://official-joke-api.appspot.com/jokes/ten';

  constructor(private http: HttpClient) {}

  public getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.apiUrl);
  }
}
