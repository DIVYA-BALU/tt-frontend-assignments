import { Component, NgModule, OnInit, inject } from '@angular/core';  

// import { DisplayApiComponent } from './display-api/display-api.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports : [DisplayApiComponent]
  // standalone : true,
  // imports: [HttpClientModule]
})
export class AppComponent implements OnInit{
    title = 'angular1';

  // constructor(){
  //   const personName : symbol = Symbol("test person name");
  //   const employeeName : symbol = Symbol("employee name");
  //   const person = {
  //     personName : "Nathis",
  //     fullName : "Nathis S",
  //     [employee  Name] : "David"
  //   };
    
  //   console.log(person);
  //   console.log(person[personName]);
  //   console.log(person.fullName);
  //   console.log(person["fullName"]);     
  //   console.log(person[employeeName]); 
  // }
  // httpClient = inject(HttpClient);
  // data : any[] = [];




  ngOnInit(): void {

    function promise1(){
      return new Promise((resolve,reject) => {
          setTimeout(() => {
              resolve("Success1");
              reject("Reject1");
          },1000)
      }) 
    }
    function promise2(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("Success2");
                reject("Reject2");
            },1000)
        })  
    }
    function promise3(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("Success3");
                reject("Reject3");
            },1000)
        }) 
    }

    const promise = promise1();

    promise.then(
        (message) => {
            console.log(message);
            return promise2();
        }
    )
    .then(
        (message) => {
            console.log(message);
            return promise3();
        }
    )
    .then(
        (message) => {
            console.log(message);
        }
    )
    .catch(
        (message) => {
            console.log(message);
        }
    );
  }
}



