import { isPlatformBrowser , DOCUMENT} from '@angular/common';
import { environment } from '../environments/environment';
import { Component, OnInit , Inject, PLATFORM_ID} from '@angular/core';
import { GiphyService, GiphyResponse, GiphyResponseItem } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public results:GiphyResponseItem[];

  constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, private giphyService: GiphyService) {}

  public ngOnInit():void {
    this.giphyService.query('cat').subscribe((response:GiphyResponse) => {
      this.results = response.data;
    });
  
    if (!isPlatformBrowser(this.platformId)) {
        let bases = this.document.getElementsByTagName('base');

        if (bases.length > 0) {
            bases[0].setAttribute('href', environment.baseHref);
        }
    }
}

}
