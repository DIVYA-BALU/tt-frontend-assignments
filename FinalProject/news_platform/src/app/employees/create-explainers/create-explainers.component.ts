import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExplainersDTO } from 'src/app/model/ExplainersDTO';
import { CreateExplainersService } from './create-explainers.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

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
  image!: File | null;

  constructor(
    private createExplainersService: CreateExplainersService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.explainersForm = new FormGroup({
      explainersUid: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.explainers = this.explainersForm.value;
    if (this.image) {
      this.explainers.image = this.image;
    }
    this.subscription = this.createExplainersService
      .createExplainers(this.explainers)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Great Job!',
            text: 'Submitted Successfully!',
            icon: 'success',
          });
          this.explainersForm.reset();
          this.image = null;
          this.sharedService.setBadge(true);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
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
    this.image = null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
