import { Component } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  constructor(private profileService:ProfileService){}

  ngOnInit(){
    this.profileService.sharedUser.subscribe({next:(res) =>{
      console.log("example", res);
      
    }})
  }
}
