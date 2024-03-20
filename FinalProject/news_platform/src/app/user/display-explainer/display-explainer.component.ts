import { Component, OnDestroy, OnInit } from '@angular/core';
import { Explainers } from 'src/app/model/Explainers';
import { HomeService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-explainer',
  templateUrl: './display-explainer.component.html',
  styleUrls: ['./display-explainer.component.scss'],
})
export class DisplayExplainerComponent implements OnInit, OnDestroy {
  explainer!: Explainers;
  explainerId!: string;
  subscriptions: Subscription[] = [];

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe((_value) => {
        this.explainerId = _value['id'];
        this.getExplainer();
      })
    );
  }

  getExplainer() {
    this.subscriptions.push(
      this.homeService.getExplainerById(this.explainerId).subscribe((data) => {
        this.explainer = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}
