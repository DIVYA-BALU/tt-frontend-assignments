import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-basics';

  hasLoggedIn: boolean = false;
  constructor(private cookieService: CookieService, private loginService: LoginService) {
    this.hasLoggedIn = loginService.isLoggedIn;
    console.log("App comp:", this.hasLoggedIn);
    
   }

  logoutUser(){
    this.cookieService.deleteAll();
    this.loginService.isLoggedIn = false;
    this.hasLoggedIn = false;
  }

  // ngOnInit(): void {

  //   // setTimeout(() =>{
  //   //   console.log("Test");

  //   //   setTimeout(() => {
  //   //     console.log("Test 2");

  //   //     setTimeout(() => {
  //   //       console.log("Test 3");
  //   //     },2000)

  //   //   },1000)

  //   // },2000)

  //   const promise1 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       //resolve('Success1')
  //       return Math.floor(Math.random() * 2) === 1 ? resolve('Success1') : reject('Failure1');
  //     }, 500)
  //   })
  //   const promise2 = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         //resolve('Success2');
  //         return Math.floor(Math.random() * 2) === 1 ? resolve('Success2') : reject('Failure2');
  //       }, 500)
  //     })
  //   }
  //   const promise3 = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         //resolve('Success3')
  //         return Math.floor(Math.random() * 2) === 1 ? resolve('Success3') : reject('Failure3');
  //       }, 500)
  //     })
  //   }

  // //   promise1
  // //     .then((message) => {
  // //       console.log(message);
  // //       //console.log(promise2);
  // //       return promise2();
  // //     })
  // //     .then((message) => {
  // //       console.log(message);
  // //       //console.log(promise2);
  // //       return promise3();
  // //     })
  // //     .then((message) => {
  // //       console.log(message);
  // //     })
  // //     .catch((message) => console.log(message));
    
  // Promise.all([promise1, promise2(), promise3()])
  // .then((message) => console.log(message))
  // .catch((message) => console.log(message))
  // }
}
