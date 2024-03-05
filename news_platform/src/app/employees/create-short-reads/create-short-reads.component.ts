import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShortReadsDTO } from 'src/app/model/ShortReadsDTO';
import { CreateShortReadsService } from './create-short-reads.service';

@Component({
  selector: 'app-create-short-reads',
  templateUrl: './create-short-reads.component.html',
  styleUrls: ['./create-short-reads.component.scss'],
})
export class CreateShortReadsComponent {
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

  shortReadsForm!: FormGroup;

  shortReads!: ShortReadsDTO;
  image!: File;

  constructor(private createShortReadsService: CreateShortReadsService) {}

  ngOnInit() {
    this.shortReadsForm = new FormGroup({
      shortReadsUid: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.shortReads = this.shortReadsForm.value;
    this.shortReads.image = this.image;
    this.createShortReadsService.createShortReads(this.shortReads).subscribe(
      (data) => {
        this.status = data;
      },
      (error) => {
        this.status = error.error;
      }
    );
  }

  imgError: string = '';

  uploadImages(e: any) {
    if (
      this.shortReadsForm.controls['shortReadsUid'].value &&
      e.target.files[0].name.includes(
        this.shortReadsForm.controls['shortReadsUid'].value
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
}
