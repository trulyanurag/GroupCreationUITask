import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getuser()
  {
    let url="http://localhost:3000/users"
    return this.http.get(url);
  }
  postGroup(data:any)
  {
    let url="http://localhost:3000/groups"
    return this.http.post(url,data);
  }
  getGroup(){
    let url="http://localhost:3000/groups"
    return this.http.get(url);
  }
 
}
