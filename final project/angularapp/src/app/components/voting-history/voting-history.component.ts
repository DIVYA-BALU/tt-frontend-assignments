import { Component } from '@angular/core';
import { FileData } from 'src/app/models/file-data';
import { Issue } from 'src/app/models/issue';
import { Poll } from 'src/app/models/poll';
import { ImageService } from 'src/app/services/image.service';
import { IssueService } from 'src/app/services/issue.service';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.css']
})
export class VotingHistoryComponent {
  constructor(private pollService: PollService, 
    private issueService : IssueService, 
    private imageService: ImageService) {}

  userId = localStorage.getItem('userId');

  ngOnInit() {
    this.getPolls();
  }

  polls:Poll[] = [];
  issue: Issue = {
    issueId: '',
    userId: '',
    location: '',
    landmark: '',
    issueType: '',
    issue: '',
    image: ''
  };

  url!: string;

  resetUrl() {
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

  issuepolls:Poll[] = [];

  severe: number = 0;
  moderate: number = 0;
  mild: number = 0;
  totalCount: number = 0;

  getPollsByIssueId(issueId: string | undefined) {
    this.pollService.getPollsByIssueId(issueId).subscribe(
      (response:Poll[]) => {
        this.issuepolls = response;
        this.getOptionCount(response);
      }
    );
  }

  getOptionCount(polls: Poll[]) {
    this.totalCount = polls.length;
    polls.forEach(poll => {
      if(poll.pollOption ==='Severe') {
        this.severe++;
      }

      if(poll.pollOption ==='Moderate') {
        this.moderate++;
      }

      if(poll.pollOption==='Mild') {
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

  getPolls() {
    if (this.userId !== null) {
      this.pollService.getPollsByUserId(this.userId).subscribe(
        (response: Poll[]) => {
          console.log(response);
          this.polls = response;
        }
      );
    } 
    
    else console.error('User ID is null');
    
  } 

  setIssue(issueId: string | undefined){
    this.getPollsByIssueId(issueId);
    this.getImage(issueId);
      this.issueService.getIssueByIssueId(issueId).subscribe(
        (response:Issue)=>{
            this.issue=response;
      });
  }

  getImage(issueId: string | undefined){
    this.imageService.getImage(issueId).subscribe(
      (response:FileData)=>{
        this.url = `assets/post_datas/${response.name}`
      }
    );
  }
}
