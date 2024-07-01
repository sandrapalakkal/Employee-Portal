import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serverUrl = "http://localhost:3000"
  constructor(private http: HttpClient, private router: Router) { }

  loginAPI(email: any, password: any) {
    //API Call
    this.http.get(`${this.serverUrl}/users/1`).subscribe((result: any) => {
      if (email == result.email && password == result.password) {
        sessionStorage.setItem("admin",JSON.stringify(result))
        alert("Login Success")
        //redirect to dashboard
        this.router.navigateByUrl('dashboard')
      }else{
        alert("Invalid Email/Password!!!")
      }
    })
  }
}