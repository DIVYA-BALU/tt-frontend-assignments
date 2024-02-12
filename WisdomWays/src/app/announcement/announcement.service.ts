import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }

  addAnnounce(announce: string): string{
    return "added";
  }
}
