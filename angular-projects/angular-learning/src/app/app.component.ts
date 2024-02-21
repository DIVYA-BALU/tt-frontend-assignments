import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // userList: any;
    // constructor(private httpClient: HttpClient) {
    //     this.userList = [];
    // }

    // ngOnInit(): void {
    //     this.getUserList();
    // }

    // getUserList() {
    //     this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((result:any) => {
    //         this.userList = result;
    //     })
    // }

    
    // NF FOR
    moviesList = 'List of movies';
    movies = [
        {title:'Intestellar', director:'Christopher Nolan'},
        {title:'Pulp Fiction', director:'Quentien Tarantino'},
        {title:'Fight Club', director:'David Finchder'},
        {title:'Shutter Island', director:'Martin Scorsocese'}
    ]

    // NG SWITCH
    num = 0;

    // NG IF
    showTick = true;
    block = false;
}
