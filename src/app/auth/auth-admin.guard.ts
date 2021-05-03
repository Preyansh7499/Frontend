import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isLoggedin()){
        return this.notLoggedIn();
      }
      let myUserType = localStorage.getItem("userType");
      if(myUserType=="admin")
        return true;
      return this.notLoggedIn();
  }
  notLoggedIn(){
    
    alert("Not Logged In as an Admin");
    this.router.navigateByUrl("home");
    return false;
  }
  
}
