import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'http://localhost:3000/products';

  constructor(private http : HttpClient){}

  create(data : any){
    return this.http.post(this.API_URL, data);
  }
}
