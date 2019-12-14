import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 loggedIn = false;

 logIn(){
   this.loggedIn = true;
 }

 logOut(){
   this.loggedIn =  false;
 }

 isAdmin(){
   //promises either resolve or reject then close
   const isUserAdmin = new Promise(
    (resolve, reject) => {
      resolve(this.loggedIn);
    }
   );
 return isUserAdmin;
}
}
