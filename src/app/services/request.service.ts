import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: 'my-token',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  private readonly baseUrl: string;
  readonly appList = new BehaviorSubject<any>([]);

  constructor(
    readonly httpClient: HttpClient) {
    this.baseUrl = environment.baseApiURL;
  }

  public get<T>(endPoint: string, params = {}) {
    return this.httpClient.get<T>(`${this.baseUrl}${endPoint}`, { params });
  }

  getAppList() {
    return this.appList;
  }

  setAppList(list) {
    this.appList.next(list);
  }
}
