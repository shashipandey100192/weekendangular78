import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private https:HttpClient) { }


  //display all data
getAllData():Observable<any>
{
  return this.https.get('https://jsonplaceholder.typicode.com/posts');
}
}
