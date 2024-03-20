import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExplainersDTO } from 'src/app/model/ExplainersDTO';
import { CreateExplainersService } from './create-explainers.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-explainers',
  templateUrl: './create-explainers.component.html',
  styleUrls: ['./create-explainers.component.scss'],
})
export class CreateExplainersComponent implements OnDestroy, OnInit {
  subscription: Subscription = new Subscription();

  categories: string[] = [
    'ENTERTAINMENT',
    'SPORTS',
    'POLITICS',
    'INTERNATIONAL',
    'LOCAL',
    'BUSINESS',
    'JOURNALISM',
    'HARD_NEWS',
    'SOFT_NEWS',
    'SCIENCE_AND_TECHNOLOGY',
    'HEALTH',
    'EDUCATION',
  ];

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table wordcount',
  };

  status: string = '';

  explainersForm!: FormGroup;

  explainers!: ExplainersDTO;
  image!: File;

  constructor(
    private createExplainersService: CreateExplainersService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.explainersForm = new FormGroup({
      explainersUid: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.explainers = this.explainersForm.value;
    this.explainers.image = this.image;
    this.subscription = this.createExplainersService
      .createExplainers(this.explainers)
      .subscribe(
        (data) => {
          this.status = data;
          this.sharedService.setBadge(true);
        },
        (error) => {
          this.status = error.error;
        }
      );
  }

  imgError: string = '';

  uploadImages(e: any) {
    if (
      this.explainersForm.controls['explainersUid'].value &&
      e.target.files[0].name.includes(
        this.explainersForm.controls['explainersUid'].value
      )
    ) {
      this.image = e.target.files[0];
      this.imgError = '';
    } else {
      this.imgError = 'error';
    }
  }

  remove() {
    //  this.image = null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
