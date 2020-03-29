import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scraping-store-web';
  loader = false;
  constructor(private readonly request: RequestService) {

  }

  ngOnInit() {
    this.request.get<any>('appList').pipe(map(res => res.data)).subscribe(res => this.request.setAppList(res));
  }
  reScrapeData() {
    this.loader = true;
    this.request.get('/').subscribe(res => this.loader = false);
  }
}
