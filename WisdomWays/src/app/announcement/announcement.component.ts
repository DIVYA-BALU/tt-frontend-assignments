import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {

  anounce: string = "";
  status: string = "";
  buttonClick: boolean = false;

  constructor(private announcementService: AnnouncementService){}

  onAnnounce(announce: NgForm) {
    this.buttonClick = true;
    // this.anounce = announce.value;
    console.log(announce);
    console.log(this.anounce);
    this.status = this.announcementService.addAnnounce(this.anounce);
    console.log(this.status);
    
  }

}
