import { Component, OnInit } from '@angular/core';
import { GiphyService, GiphyResponse, GiphyResponseItem } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public results:GiphyResponseItem[];

  constructor(private giphyService: GiphyService) {}

  public ngOnInit():void {
    this.giphyService.query('cat').subscribe((response:GiphyResponse) => {
      this.results = response.data;
    });
  }

}
