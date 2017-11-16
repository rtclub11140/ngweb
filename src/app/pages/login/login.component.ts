import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../share/service/login.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  studentEmail = '';
  studentPassword = '';
  phone = '';
  otpText = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    public af: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.loginService.doLogin({
      studentEmail : this.studentEmail,
      studentPassword : this.studentPassword
    }).subscribe( (resp) => {
        if (resp.success) {
            window.localStorage.setItem('token', resp.token);
           this.router.navigate(['admin/student']);
           /* this.router.navigate(['admin']); */
        } else {
          Materialize.toast('I am a toast!', 4000);
        }
    });
  }

  loginWithGoogle() {
    this.af.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.af.authState.subscribe((user) => {
        console.log(user);
    });
    // this.af.auth.signInWithPopup();
  }

  loginWithFacebook() {
    this.af.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  loginWithTwitter() {
    this.af.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
  }

  loginWithGitHub() {
    this.af.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider());
  }

  loginWithPhone() {
   this.af.auth.signInWithPhoneNumber(
     '+66' + this.phone,
     new firebase.auth.RecaptchaVerifier('recapt-id')
   ).then(confirmamtionResult => {
      window['confirmamtionResult'] = confirmamtionResult;
   })
   .catch(error => {});
  }

  confirmOtp() {
    window['confirmamtionResult'].confirm(this.otpText).then((resp) => {
        console.log(resp);
    }).catch((e) => {
        console.log(e);
    });
  }

  testSharp(value) {
    console.log(value);
  }

}
