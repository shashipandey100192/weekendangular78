import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private myhttp:HttpClient) { }

  mydatalist():Observable<any>
  {
      return this.myhttp.get('https://jsonplaceholder.typicode.com/posts');
  }



}

