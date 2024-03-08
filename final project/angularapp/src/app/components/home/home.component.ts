import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileData } from 'src/app/models/file-data';
import { Issue } from 'src/app/models/issue';
import { Poll } from 'src/app/models/poll';
import { ImageService } from 'src/app/services/image.service';
import { IssueService } from 'src/app/services/issue.service';
import { PollService } from 'src/app/services/poll.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  public issues: Issue[] = [];
  public userId = localStorage.getItem('userId');
  public location = localStorage.getItem('location');
  orderForm: any;

  constructor(private pollService: PollService,
    private issueService: IssueService,
    private imageService: ImageService,
    private router: Router,) { 
    
  }
  
  ngOnInit() {
    this.getIssues();
  }

  url!: string;

  resetUrl() {
    this.url =' ';
    this.severe = 0;
    this.moderate = 0;
    this.mild = 0;
    this.disabled = false;
    this.severePercent = 0;
    this.moderatePercent = 0;
    this.mildPercent = 0;
    this.severeWidth = '';
    this.moderateWidth = '';
    this.mildWidth = '';
  }
  
  setIssue(issue: Issue) {
    this.getPolls(issue.issueId);
    this.issue = issue;
    this.imageService.getImage(issue.issueId).subscribe(
      (response:FileData)=>{
        this.url = 'assets/post_datas/' + response.name;
      },
      (error)=>{
        console.log('error getting image data')
      }
    );
  }

  public getIssues(): void {
    this.issueService.getIssuesByLocation().subscribe(
      (response: Issue[]) => {
        this.issues = response.filter(issue => issue.userId !== this.userId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public issue:Issue={
    issueId: '',
    userId: '',
    location: '',
    landmark: '',
    issueType: '',
    issue: '',
    image: ''
  }

  public onAddIssue(addForm: NgForm): void {
    var addIssue: Issue = {
      issueId: '',
      userId: '',
      location: '',
      landmark: '',
      issueType: '',
      issue: '',
      image: ''
    }

    addIssue = addForm.value;
    addIssue.userId = this.userId ? this.userId.toString() : '';
    addIssue.location = this.location !== null ? this.location : '';
    this.issueService.addIssue(addIssue).subscribe(
      (response: Issue) => {
        console.log(response);
        this.getIssues();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  
  openAddModal(issue: null, mode: string): void {
    const button = document.getElementById('onAddIssues');
    if (button != null) {
      button.style.display = 'block';
    }
  }

  closeAddModal() {
    const button = document.getElementById('onAddIssues');
    if (button != null) {
      button.style.display = 'none';
    }
  }

  polls:Poll[] = [];

  poll: Poll = {
    id: '',
    issueId: '',
    userId: this.userId ?? '',
    pollOption: ''
  };

  severe:number = 0;
  moderate:number = 0;
  mild:number = 0;
  totalCount:number = 0;
  disabled:boolean = false;

  getPolls(issueId: string | undefined) {
    this.poll.issueId = issueId;

    this.pollService.getPollsByIssueId(issueId).subscribe((response:Poll[]) => {
      this.polls = response;
      this.getOptionCount(response);
      response.forEach(poll => {
        if(poll.userId === this.userId){
          this.disabled=true;
        }
      });
    });
  }
  
  getImage(issueId: string){
    this.imageService.getImage(issueId).subscribe(
      (response: FileData)=>{
         let url = 'assets/post_datas/' + response.name;
         console.log(url);
      },
      (error) => {
        console.log('error getting image data')
      }
    );
  }

  getOptionCount(polls: Poll[]){
    this.totalCount=polls.length;
    polls.forEach(poll => {
      if (poll.pollOption === 'Severe') {
        this.severe++;
      }
      if (poll.pollOption==='Moderate') {
        this.moderate++;
      }
      if (poll.pollOption==='Mild') {

        this.mild++;
      }
    });
    
    this.severePercent = Math.round((this.severe / this.totalCount) * 100);
    this.moderatePercent = Math.round((this.moderate / this.totalCount) * 100);
    this.mildPercent = Math.round((this.mild / this.totalCount) * 100);
    this.severeWidth = `width: ${this.severePercent}%`;
    this.moderateWidth = `width: ${this.moderatePercent}%`;
    this.mildWidth = `width: ${this.mildPercent}%`;
  }

  severePercent: number = 0
  moderatePercent: number = 0
  mildPercent: number = 0

  severeWidth: string = ''
  moderateWidth: string = ''
  mildWidth: string = ''


  onvote(option: string){
    if (!this.disabled) {
      if (option==='Severe') {
        this.poll.pollOption='Severe';
        this.severe++;
      }
      if (option==='Moderate') {
        this.poll.pollOption='Moderate';
        this.moderate++;
      }
      if (option==='Mild') {
        this.poll.pollOption='Mild';
        this.mild++;
      }
      
      this.totalCount++;
      this.disabled = true;

      this.severePercent = Math.round((this.severe / this.totalCount) * 100);
      this.moderatePercent = Math.round((this.moderate / this.totalCount) * 100);
      this.mildPercent = Math.round((this.mild / this.totalCount) * 100);
      this.severeWidth = `width: ${this.severePercent}%`;
      this.moderateWidth = `width: ${this.moderatePercent}%`;
      this.mildWidth = `width: ${this.mildPercent}%`;

      this.pollService.addPoll(this.poll).subscribe(
        (response:Poll) => {
          console.log(response);
        }
      )
    }
  }

  

}
