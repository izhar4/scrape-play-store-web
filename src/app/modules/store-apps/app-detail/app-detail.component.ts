import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, private readonly request: RequestService) { }
  appDetail: any = {};
  ngOnInit(): void {
    this.request.getAppList().pipe().subscribe(res => {
      this.appDetail = res.find(data => data.playStoreId === this.route.snapshot.params.appId);
      console.log(this.appDetail)
    });
  }

}
