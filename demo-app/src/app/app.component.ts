import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  allPost: any = [];

  constructor(private post: DataService, private loginService: LoginService){
    this.post.getPost().subscribe((data) => {
      this.allPost = data;
    });
  }

  parent = "parentname";

  child = "";
  
  parentFunction(value: string) {
    this.child = value;
  }

  operations: string[] = ["addition", "subtraction", "multiplication", "division"];

  isChecked = false;

  number1: number = 0;
  number2: number = 0;

  num: string = "";

  logout(){
    this.loginService.logout();
  }
}
