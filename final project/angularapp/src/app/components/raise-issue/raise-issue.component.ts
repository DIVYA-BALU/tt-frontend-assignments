import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs';
import { FileData } from 'src/app/models/file-data';
import { Issue } from 'src/app/models/issue';
import { ImageService } from 'src/app/services/image.service';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-raise-issue',
  templateUrl: './raise-issue.component.html',
  styleUrls: ['./raise-issue.component.css']
})
export class RaiseIssueComponent {
  constructor(private imageService: ImageService, private issueService: IssueService,private router:Router) {}

  userId: string = localStorage.getItem('userId') ?? '';
  public location = localStorage.getItem('location');
  url: string = '';

  ngOnInit(){}

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
    if (this.files && this.files.length > 0) {
      addIssue.image = 'yes';
    } else addIssue.image = 'no';

    
    addIssue.location = String(this.location);
    addIssue.userId = this.userId.toString();
    addIssue.issueType = addForm.value.issueType;
    addIssue.landmark = addForm.value.landmark;
    addIssue.issue = addForm.value.issue;

    console.log(addIssue);
    this.issueService.addIssue(addIssue).subscribe(
      (response: Issue) => {
        if (this.files && this.files.length > 0 ){
          this.uploadImage(response.issueId);
        }
        console.log(response);
        addForm.reset();
        this.router.navigate(['/profile']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

 files!: FileList;
 
  onChange(event: any) {
    this.files = event.target.files;
  }

  // uploadImage(issueId: string){
  //   const formData = new FormData();
  //   formData.append('image', this.files[0]);
  //     this.imageService.postImage(this.userId, issueId, formData).subscribe(
  //       (response:FileData) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         alert("Errrr.... Not saved!");
  //       }
  //     );
  // }

  uploadImage(issueId: string | undefined) {
    const formData = new FormData();
    formData.append('image', this.files[0]);
  
    this.imageService.postImage(this.userId, issueId, formData).pipe(
      tap((response: FileData) => {
        console.log(response);
      })
    ).subscribe({
      error: (error) => {
        alert("Errrr.... Not saved!");
      }
    });
  }
  
}
