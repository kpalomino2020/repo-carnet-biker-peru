import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,private router: Router) {
 
  }

  /***Metodo de login por google */
  loginGoogle() {
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  AuthLogin(provider:any) {
    return this.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!');
        this.router.navigateByUrl('/crear-bikers');
    }).catch((error) => {
        console.log(error)
    })
  }

  logout() {
    this.auth.signOut();
  }

}
