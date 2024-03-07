import { Component } from '@angular/core';
import { ShortReads } from 'src/app/model/ShortReads';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-short-reads',
  templateUrl: './short-reads.component.html',
  styleUrls: ['./short-reads.component.scss']
})
export class ShortReadsComponent {

  shortReads: ShortReads[] = [];
  pageIndex: number = 0;

  constructor(private homeService: HomeService) {}

  ngOnInit(){
    this.getShortReads(this.pageIndex, 5);
  }
  
  getShortReads(pageIndex: number, pageSize: number){
    this.homeService.getShortReads(pageIndex, pageSize).subscribe( (data) => {
      data.content.forEach( (data) => {
        this.shortReads.push(data);
      })
    })
  }

  loadMore(){
    this.getShortReads(++this.pageIndex, 5);
  }
}
