import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { salesdata } from './salesdata';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  loadsaledata(){
    return this.http.get<salesdata[]>("http://localhost:3000/sales")
  }
}
