import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollegeInfoService {
  private API_URL = 'http://localhost:3000/college-info';
  constructor(private http: HttpClient) {}

  fetchCollegeDetails(){
    return this.http.get(`${this.API_URL}`);
  }
}
