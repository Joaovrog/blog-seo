import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
blogTitle = "Blogu";
baseUrl = "http://localhost:4200/";
  constructor() { }
}
