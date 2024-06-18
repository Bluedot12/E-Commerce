import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface product {
  id: number,
  title: string,
  price: string,
  des: string
}
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private URL ='http://localhost:4000/products'

  constructor(private http:HttpClient) { }

  getData():Observable<product[]>{
    return this.http.get<product[]>(this.URL);
  }
}
