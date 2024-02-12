import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachService {

  setInstructor: boolean = false;

  constructor() { }

  addInstructor(){
    localStorage.setItem('instructor', 'true');
    console.log(this.setInstructor); 
    return "added";
  }

  isInstructor(){
    if(localStorage.getItem('instructor') == 'true'){
      this.setInstructor = true;
    }
    console.log(this.setInstructor);  
    return this.setInstructor;
  }
}
