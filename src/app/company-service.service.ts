import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  private baseURL="http://localhost:8081/getAll"
  constructor(private http:HttpClient) { }
  public userRegisteration(company){
    return this.http.post("http://localhost:8081/save",company,{responseType:"text" as "json"});
  }
 
  public getUsers(){
    return this.http.get("http://localhost:8081/getAll");
  }
  public deleteUser(userName){
    return this.http.delete("http://localhost:8081/delete");
  }
}
