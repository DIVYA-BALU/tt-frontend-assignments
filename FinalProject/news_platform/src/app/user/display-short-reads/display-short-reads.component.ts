import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayShortReadsService } from './display-short-reads.service';
import { ShortReads } from 'src/app/model/ShortReads';

@Component({
  selector: 'app-display-short-reads',
  templateUrl: './display-short-reads.component.html',
  styleUrls: ['./display-short-reads.component.scss'],
})
export class DisplayShortReadsComponent implements OnInit {
  shortReadsId: string = '';
  shortReads!: ShortReads;

  constructor(
    private route: ActivatedRoute,
    private displayService: DisplayShortReadsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((_value) => {
      this.shortReadsId = _value['id'];
      this.getShortReads();
    });
  }

  getShortReads() {
    this.displayService.getShortReads(this.shortReadsId).subscribe((data) => {
      if (data) {
        this.shortReads = data;
        this.increaseViews();
      }
    });
  }

  increaseViews() {
    this.displayService.increaseViews(this.shortReadsId);
  }
}
