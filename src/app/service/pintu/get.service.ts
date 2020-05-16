import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getInterface } from '../../interface/pintu/getInterface';
import { GetOver } from '../../interface/listrik/get-over';

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

  ambilListrikOverview(): Observable<GetOver[]>{
    return this.http.get<GetOver[]>(this.url + 'getOverlistrik')
  }

  ambilListrik(): Observable<GetOver[]>{
    return this.http.get<GetOver[]>(this.url + 'getListrik')
  }

  kirimManual(data): Observable<[]>{
    return this.http.post<[]>(this.url + 'doManual', data)
  }
}
