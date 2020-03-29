import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  constructor(private readonly request: RequestService, private readonly router: Router) { }
  appList$;
  ngOnInit(): void {
    this.appList$ = this.request.getAppList();
  }
  viewDetail(storeId) {
    this.router.navigate(['/', storeId]);
  }

}
