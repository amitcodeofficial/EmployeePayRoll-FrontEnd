import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeHttpService {
  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getRequest(url: string) {
    return this.httpClient.get(this.baseUrl + url);
  }
}
