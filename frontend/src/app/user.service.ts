import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class UserService {
  
  url: string = "http://mean-stack-charlie-2018-ben-phortonssf.c9users.io:8080/api/AppUsers";
  returnUrl: string = "main";
  constructor( private http : HttpClient, private router : Router) { }
  
  register(user){
    return this.http.post(this.url, user)
  }

 login(user){
    console.log(user)
    return this.http.post( this.url + "/login", user)
  }
  
   toHomePage(resData){
    window.sessionStorage.setItem( "token", resData.token)
    window.sessionStorage.setItem( "userId", resData.id)
  }
}