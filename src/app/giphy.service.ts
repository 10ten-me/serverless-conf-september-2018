import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface GiphyResponseItem {
  id:string;
  embed_url:string;
}

export interface GiphyResponse {
  data: GiphyResponseItem[];
}

@Injectable()
export class GiphyService {

  public readonly url:string = 'http://api.giphy.com/v1/gifs/search?api_key=lMcARQ917QgLIYCAym1Saw4YlYyVJulR&&limit=20&rating=g&lang=en';

  constructor(private http: HttpClient) { }

  public query(search:string):Observable<GiphyResponse> {
    const url:string = `${this.url}&q=${search}`;
    return this.http.get<GiphyResponse>(url);
  }

}
