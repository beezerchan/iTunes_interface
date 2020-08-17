import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItunesDataService {
  constructor(
    private http: HttpClient
  ) {}
    url = 'https://itunes.apple.com/search?';

    searchTerm(term: string) {
      return this.http.get( this.url + 'term=' + term);
    }
}
