import { Component, OnInit } from '@angular/core';
import { Explainers } from 'src/app/model/Explainers';
import { HomeService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-explainer',
  templateUrl: './display-explainer.component.html',
  styleUrls: ['./display-explainer.component.scss'],
})
export class DisplayExplainerComponent implements OnInit {
  explainer!: Explainers;
  explainerId!: string;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((_value) => {
      this.explainerId = _value['id'];
      this.getExplainer();
    });
  }

  getExplainer() {
    this.homeService.getExplainerById(this.explainerId).subscribe( (data) => {
      this.explainer = data;
    })
  }
}
