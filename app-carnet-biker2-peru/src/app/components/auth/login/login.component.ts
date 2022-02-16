import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  provider = new GoogleAuthProvider();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

}
