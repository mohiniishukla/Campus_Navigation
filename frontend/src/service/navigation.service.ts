import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) {}
  private API_URL = 'http://localhost:3000/navigator';

  getRoute() {
    return this.http.get(`${this.API_URL}`);
  }
}
