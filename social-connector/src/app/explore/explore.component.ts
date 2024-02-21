import { Component, HostListener, Renderer2 } from '@angular/core';
import { PostService } from '../service/post.service';
import { postResponse } from '../models/postResponse';
import { ProfileService } from '../service/profile.service';
import { pageResponse } from '../models/pageResponse';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent {

  searchContent: string = '';
  currentPage: number = 0;
  isLoading: boolean = false;
  constructor(private postService: PostService, private profileService:ProfileService) {}

  posts: postResponse[] = [];
  pages:pageResponse[] = [];
  searchName:string = "";
  //  @HostListener is a decorator that you can use to listen for events on the host element of the directive or component
  // the first parameter is event and the second one is some parameters
  // eg: @HostListener('click', ['$event'])
  //     onButtonClick(event: Event)
  @HostListener('window:scroll', [])
  onWindowScroll() {
    //identify the current scroll position
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // window height refers to the height of the visible portion of the web page within the browser window.
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const documentHeight = document.body.scrollHeight;
    // The document height refers to the entire height of the HTML document from the top of the document to
    // the bottom, including any content that might be hidden or scrolled beyond the initially visible area.

    // Check if the user has scrolled to the bottom of the page
    if (scrollPosition + windowHeight >= documentHeight && !this.isLoading) {
      this.loadData();
    }
  }

  private loadData(): void {
    console.log('loadData function called');

    this.isLoading = true;
    this.postService
      .getRecomendedPost(this.currentPage)
      .subscribe((response: any) => {
        this.posts = [...this.posts, ...response]; // Assuming your response is an array
        this.isLoading = false;
        this.currentPage++;
        console.log(this.posts);
      });
  }

  

  onScroll(): void {
    console.log('scroll');

    if (!this.isLoading) {
      this.loadData();
    }
  }
  myInterval = setTimeout(()=>{})
  minLength:number = 6;
  search(){
      clearInterval(this.myInterval);
     this.myInterval = setTimeout(() => {
      // console.log(this.searchName);
      this.profileService.getPageBySimilarName(this.searchName).subscribe({next: (result) => {
        this.pages = result;
        // console.log(this.pages);
      }});
    },500)
  }
  
  ngOnInit() {
    this.loadData();
  }

  saveUser(page: pageResponse) {
    console.log("event called", page);
    this.profileService.setViewProfileDetailes(page);
    }
}
