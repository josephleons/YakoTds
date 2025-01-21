import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Account } from '../model/Account';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  allusers:User[]=[];
  http:HttpClient = inject(HttpClient);
  private apiUrl='https://yako-careassist-default-rtdb.firebaseio.com/users.json';

  // constructor(private http:HttpClient) { }

  creatAccount(users:Account):Observable<any>{
    return this.http.post(this.apiUrl,users);
    
}
// retrive user records 
  public getAllUser():Observable<any>{
    return this.http.get<{[key:string]:User}>(this.apiUrl)
    .pipe(map((response)=> {
      const users=[];
      for(const key in response){
        if(response.hasOwnProperty(key)){
          users.push({...response[key],id:key})
        }
      }
      return users;
    }))
}

DeleteUser(id:string | undefined){
   this.http.delete('https://yako-careassist-default-rtdb.firebaseio.com/users/' +id+ '.json')
   .subscribe((resp)=>{
    console.log(resp);
   });
  }

}
