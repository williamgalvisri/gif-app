import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
        <h5>Buscador:</h5>
        <input
            type="text"
            class="form-control"
            placeholder="Buscador Gif"
            (keyup.enter)="searchTag(txtTagInput.value); txtTagInput.value = ''"
            #txtTagInput />
    `
})
export class SearchBoxComponent implements OnInit {
    constructor(private gifsService: GifsService) { }

    ngOnInit() { }

    searchTag(newTag: string) {
        this.gifsService.searchTag(newTag);
    }
}
