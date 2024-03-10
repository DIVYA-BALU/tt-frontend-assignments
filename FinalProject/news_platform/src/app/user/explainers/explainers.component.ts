import { Component } from '@angular/core';
import { Explainers } from 'src/app/model/Explainers';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-explainers',
  templateUrl: './explainers.component.html',
  styleUrls: ['./explainers.component.scss']
})
export class ExplainersComponent {
  explainers: Explainers[] = [];
  pageIndex: number = 0;

  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.getExplainers(0, 3);
  }

  getExplainers(pageIndex: number, pageSize: number) {
    this.homeService.getExplainer(pageIndex,pageSize).subscribe((data) => {
      data.content.forEach((data) => {
        this.explainers.push(data);
      });
    });
  }

  loadMore() {
    this.getExplainers(++this.pageIndex, 3);
  }
}
