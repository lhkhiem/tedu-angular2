import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers = new HttpHeaders();
  constructor() { }
  get(uri:string){
    return null;
  }
  post(uri:string,data?:any){
    return null;
  }
  put(uri:string, data?:any){
    return null;
  }
  delete(uri:string, key:string, id:string){
    return null;
  }
  postFile(uri:string, data?:any){
    return null;
  }
}
