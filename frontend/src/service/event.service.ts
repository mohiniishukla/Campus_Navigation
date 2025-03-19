import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

   private API_URL = 'http://localhost:3000/event';
    constructor(private http: HttpClient) {}
  
    fetchEventDetails(){
      return this.http.get(`${this.API_URL}`);
    }
}
