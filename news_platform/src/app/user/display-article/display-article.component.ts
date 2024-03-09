import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { DisplayArticleService } from './display-article.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessSnackBarComponent } from 'src/app/success-snack-bar/success-snack-bar.component';
import { FailureSnackBarComponent } from 'src/app/failure-snack-bar/failure-snack-bar.component';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.scss']
})
export class DisplayArticleComponent {

  articleId: string = '';
  article!: Article;
  durationInSeconds!: number;
  isSaved!: boolean;

  constructor(
    private route: ActivatedRoute,
    private displayService: DisplayArticleService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.route.params.subscribe((_value) => {
      this.articleId = _value['id'];
      this.getArticle();
      this.increaseViews();
    });
  }

  getArticle() {
    this.displayService.getArticle(this.articleId).subscribe((data) => {
      if (data) {
        this.article = data;
        this.isSaved = this.article.saved;
      }
    });
  }

  increaseViews(){
    this.displayService.increaseViews(this.articleId);
  }

  onSave(){
    this.displayService.saveArtcile(this.articleId).subscribe( (data) => {
      this.openSuccessSnackBar();
      this.getArticle();
    },
    (error) => {
      this.openFailureSnackBar();
    })
  }

  unSave(){
    this.displayService.unsaveArticle(this.articleId).subscribe( (data) => {
      this.openSuccessSnackBar();
      this.getArticle();
    },
    (error) => {
      this.openFailureSnackBar();
    })
  }

  openSuccessSnackBar() {
    this._snackBar.openFromComponent(SuccessSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openFailureSnackBar() {
    this._snackBar.openFromComponent(FailureSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
