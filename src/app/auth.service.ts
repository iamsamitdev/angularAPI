import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  sendToken(token:string){
    // บันทึกข้อมูลที่ได้ลง localStorage
    localStorage.setItem("LoggedInUser", token);
  }

  getToken(){
    // อ่านข้อมูล localStorage
    return localStorage.getItem("LoggedInUser");
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    // Clear localStorage
    localStorage.removeItem("LoggedInUser");
    this.router.navigate(["login"])
  }

}
