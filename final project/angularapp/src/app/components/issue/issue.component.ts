import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/models/issue';
import { IssueService } from 'src/app/services/issue.service';
import { NgForm } from '@angular/forms';
import { FileData } from 'src/app/models/file-data';
import { ImageService } from 'src/app/services/image.service';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {

  public issues: Issue[] = [];
  public userId = localStorage.getItem('userId');
  public location = localStorage.getItem('location');

  public issue: Issue = {
    issueId: '',
    userId: '',
    location: '',
    landmark: '',
    issueType: '',
    issue: '',
    image: ''
  };

  public editIssue: Issue = {
    issueId: '',
    userId: '',
    location: '',
    landmark: '',
    issueType: '',
    issue: '',
    image: ''
  };

  public deleteIssue: Issue = {
    issueId: '',
    userId: '',
    location: '',
    landmark: '',
    issueType: '',
    issue: '',
    image: ''
  }

  pollOptions: string[] = ['Severe','Moderate','Mild'];
  votes: { [key: string]: number } = {};
  totalVotes: number = 0;
  selectedOptions: string[] = [];

  constructor(private issueService: IssueService, 
    private imageService: ImageService, 
    private pollService: PollService, 
    private router: Router ) { }

  ngOnInit() {
    this.getIssues();
  }
  
  url!: string;

  setIssue(issue:Issue){
    this.issue = issue;
    this.getPollsByIssueId(issue.issueId);
    this.imageService.getImage(issue.issueId).subscribe(
      (response:FileData)=>{
        this.url = 'assets/post_datas/'+response.name;
      },
      (error)=>{
        console.log('error getting image data')
      }
    );
  }

  public getIssues(): void {
    this.issueService.getIssuesByUserId().subscribe(
      (response: Issue[]) => {
        this.issues = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  openRaisebox(){
    this.router.navigate(['/raise'])
  }

  public onAddIssue(addForm: NgForm): void {
    let addIssue: Issue = {
      issueId: '',
      userId: this.userId ? this.userId.toString() : '',
      location: this.location !== null ? this.location?.toString() : '',
      landmark: '',
      issueType: '',
      issue: '',
      image: ''
    }

    addIssue = addForm.value;
    // addIssue.userId = this.userId ? this.userId.toString() : '';
    // addIssue.location = this.location !== null ? this.location?.toString() : '';
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

  public onUpdateIssue(issue: Issue): void {
    this.issueService.updateIssue(issue).subscribe(
      (response: Issue) => {
        console.log(response);
        this.getIssues();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteIssue(issueId: string | undefined): void {
    this.issueService.deleteIssue(issueId).subscribe(
      (response: void) => {
      this.getIssues();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
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

  resetUrl(){
    this.url = '';
    this.severe = 0;
    this.moderate = 0;
    this.mild = 0;
    this.severePercent = 0;
    this.moderatePercent = 0;
    this.mildPercent = 0;
    this.severeWidth = '';
    this.moderateWidth = '';
    this.mildWidth = '';
  }


   openEditModal(issue: Issue, mode: string): void {
    this.editIssue = issue;
    const button = document.getElementById('onEditIssues');
    if (button != null) {
      button.style.display = 'block';
    }
  }

  closeEditModal() {
    const button = document.getElementById('onEditIssues');
    if (button != null) {
      button.style.display = 'none';
    }
  }

  openDeleteModal(Issue: Issue, mode: string): void {
    this.deleteIssue = Issue;
    const button = document.getElementById('onDeleteIssues');
    if (button != null) {
      button.style.display = 'block';
    }
  }

  closeDeleteModal() {
    const button = document.getElementById('onDeleteIssues');
    if (button != null) {
      button.style.display = 'none';
    }
  }

  updateProgress(option: string) {
    if (!this.votes[option]) {
      this.votes[option] = 1;
      this.totalVotes++;
      this.disableOtherOptions(option);
      this.selectedOptions.push(option);
    }
  }

  getPercentage(option: string): number {
    const voteCount = this.votes[option] || 0;
    const percentage = this.totalVotes > 0 ? (voteCount / this.totalVotes) * 100 : 0;
    return Math.max(0, Math.min(100, percentage));
  }
  

  isOptionDisabled(option: string): boolean {
    return this.selectedOptions.length > 0 && !this.selectedOptions.includes(option);
  }

  disableOtherOptions(selectedOption: string) {
    this.pollOptions.forEach(option => {
      if (option !== selectedOption) {
        this.votes[option] = -1; 
      }
    });
  }

  issuepolls:Poll[] = [];
  
  severe:number = 0;
  moderate:number = 0;
  mild:number = 0;
  totalCount:number = 0;

  getPollsByIssueId(issueId:string | undefined){
    this.pollService.getPollsByIssueId(issueId).subscribe((response:Poll[])=>{
      if(response.length>0){
        this.issuepolls=response;
        this.getOptionCount(response);
      }
    });
  }

  getOptionCount(polls:Poll[]){
    this.totalCount=polls.length;
    polls.forEach(poll => {
      if(poll.pollOption==='Severe'){
        
        this.severe++;
      }
      if(poll.pollOption==='Moderate'){
        
        this.moderate++;
      }
      if(poll.pollOption==='Mild'){
        
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
}
