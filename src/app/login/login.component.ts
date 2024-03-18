import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import firebase from 'firebase/compat/app';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, public auth: Auth, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  onSubmit() {
    createUserWithEmailAndPassword(this.auth, this.loginForm.value.email, this.loginForm.value.password)
    .then((response: any) => {
     this.router.navigate(['/dashboard'])
     })
     .catch((error: any) => {
       console.log(error);
     });
    
  }
 
  signInWithGoogle() {
     signInWithPopup(this.auth, new GoogleAuthProvider())
     .then((userCredential) => {
       this.router.navigate(['/']);
     })
     .catch((error) => {
       console.error('Google sign-in error:', error);
     });
 }

 signInWithApple() {

  
 }

 

  

}
