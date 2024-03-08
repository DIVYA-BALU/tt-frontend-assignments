import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileData } from 'src/app/models/file-data';
import { Issue } from 'src/app/models/issue';
import { Location } from 'src/app/models/location';
import { User } from 'src/app/models/user';
import { ImageService } from 'src/app/services/image.service';
import { IssueService } from 'src/app/services/issue.service';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  userId = localStorage.getItem('userId');
  username = localStorage.getItem('userName');
  userLocation = localStorage.getItem('location');
  location: Location = {
    id: '',
    userId: this.userId ? this.userId.toString() : '',
    location: ''
  };

  public issues: Issue[] = [];
  locations:Location[] = [];

  constructor(private issueService: IssueService,private imageService: ImageService,private locationService: LocationService,private userService: UserService,private router: Router) {}
  
  ngOnInit() {
    this.getIssues();
    if (this.userId) {
      this.locationService.getAllLocations(this.userId).subscribe(
        (response: Location[]) => {
          this.locations = response;
          console.log(this.locations)
        }
      );
    }
  }

  url!: string;

  resetUrl(){
    this.url='';
  }
  
  setIssue(issue: Issue){
    this.issue = issue;
    this.imageService.getImage(issue.issueId).subscribe(
      (response: FileData)=>{
        this.url = 'assets/post_datas/' + response.name;
      },
      (error)=>{
        console.log('error getting image data');
      }
    );
  }

  public getIssues(): void {
    this.issueService.getIssuesByLocation().subscribe(
      (response: Issue[]) => {
        const userIdValue: string | null = this.userId ? this.userId.toString() : null;
        this.issues = response.filter(issue => issue.userId !== userIdValue);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public issue: Issue = {
    issueId: '3',
    userId: '1',
    location: 'this area',
    landmark: 'this area',
    issueType: 'this area',
    issue: 'this area',
    image: 'yes'
  }

  cancelLocation(){
    this.location.location = '';
  }

  addLocation(location:string){
    this.location.location = location;
  }

  updateLocation(){
    this.location.location = this.location.location.toLowerCase();

    const isLocationUnique = !this.locations.some(
      (existingLocation) => existingLocation.location === this.location.location
    );

    if (isLocationUnique) {
      this.locationService.addLocation(this.location).subscribe(
        (response: Location) => {
          this.updateUserLocation(response.userId, response.location);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    
    else this.updateUserLocation(this.location.userId, this.location.location)
    
  }

  updateUserLocation(id: string, location: string){
    this.userService.updateUserLocation(id, location).subscribe(
      (response: User) => {
        this.userLocation = response.location;
        localStorage.setItem('location',response.location);
        window.location.reload();
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
}
