import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getInterface } from '../../interface/pintu/getInterface';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:3000/";

  ambilOverview(): Observable<getInterface[]>{
    return this.http.get<getInterface[]>(this.url + 'getOverpintu')
  }

  ambil(){
    
  }
}
