import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {

  announcement: string = "";
  status: string = "";
  buttonClick: boolean = false;

  constructor(private announcementService: AnnouncementService){}

  onAnnounce(announce: NgForm) {
    this.buttonClick = true;
    // console.log(announce.value);
    this.announcementService.addAnnounce(announce.value).subscribe(data => this.status = data); 
  }

}
