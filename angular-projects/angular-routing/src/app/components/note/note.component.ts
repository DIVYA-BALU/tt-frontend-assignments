import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
    noteId!: string | null;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.noteId = params.get('id');
        });
    }

}
