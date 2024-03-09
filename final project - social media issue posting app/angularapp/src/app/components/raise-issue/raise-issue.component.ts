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
  location = localStorage.getItem('location');
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
  
    const addIssueFormData = new FormData()
    addIssueFormData.append('location' , localStorage.getItem('location')!);
    addIssueFormData.append('userId' , this.userId);
    addIssueFormData.append('issueType' , addForm.value.issueType);
    addIssueFormData.append('landmark', addForm.value.landmark);
    addIssueFormData.append('issue',addForm.value.issue);
    addIssueFormData.append('imageFile', this.files);

    console.log(addIssueFormData);

    this.issueService.addIssue(addIssueFormData).subscribe(
      (response: Issue) => {

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

 files!: File;
 
  onChange(event: any) {
    this.files = event.target.files[0];
  }

  uploadImage(issueId: string | undefined) {
    const formData = new FormData();
  
    this.imageService.postImage(formData).pipe(
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
