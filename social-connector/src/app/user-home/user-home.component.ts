import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { postResponse } from '../models/postResponse';
import { LoginService } from '../service/login.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

  private subscription:Subscription;
  sharedUserId:string = "";
  posts:postResponse[]=[];
  constructor(private homeService:HomeService,private loginService:LoginService){

    this.subscription = this.loginService.sharedUserId$.subscribe((id) => {
      this.sharedUserId = id;
      console.log(this.sharedUserId);
      
    });
    console.log("home");
    
  }

  ngOnInit(){
    this.homeService.getFollowingPost()
    .subscribe({next: (httpResult) => {
      console.log("httpresult",httpResult);
      this.posts = httpResult;
      
    },error:(error) => {
      console.log("error",error);
    },
  complete:()=>{
    
  }});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
