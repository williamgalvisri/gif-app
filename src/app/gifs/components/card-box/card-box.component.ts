import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'gifs-card-box',
    templateUrl: './card-box.component.html',
    styleUrl: './card-box.component.css'
})

export class CardBoxComponent implements OnInit {
    @Input() list$: Observable<Gif[]> = new Observable();
    constructor() { }

    ngOnInit() { }
}
