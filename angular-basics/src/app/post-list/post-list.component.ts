import { Component,OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { Details } from '../details.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

    posts: Details[] = [];
  
    constructor(private detailsService: DetailsService ) {}
  
    ngOnInit(): void {
      this.detailsService.getDetails().subscribe((post) => {
        this.posts = post;
      });
    }
  
}
