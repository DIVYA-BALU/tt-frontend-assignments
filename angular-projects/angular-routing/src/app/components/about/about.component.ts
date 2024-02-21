import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const projectId = params['projectId'];
            console.log(projectId);
            
        })
    }

}
