import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, ReponseSearch } from '../interfaces/gif.interface';
import { map, Observable, of, tap } from 'rxjs';

const API_GIFS_KEY = '<token>';
@Injectable({
    providedIn: 'root',
})
export class GifsService {
    public gifList$: Observable<Gif[]> = new Observable();
    public buttonSearch: string = '';
    private _tagsHistory: string[] = [];
    private serviceUrl = `https://api.giphy.com/v1/gifs`
    constructor(private http: HttpClient) {
        this.loadLocalStorage()
    }

    get tagsHistory() {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();
        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter(
                (oldTag) => oldTag !== tag
            );
        }

        this._tagsHistory.unshift(tag);

        this._tagsHistory = this.tagsHistory.slice(0, 10);
        this.saveLocalStorage();
    }

    private saveLocalStorage() {
        localStorage.setItem('history', JSON.stringify(this.tagsHistory))
    }

    private loadLocalStorage() {
       const local = localStorage.getItem('history');
       if(!local) return;
       this._tagsHistory = JSON.parse(local!);

       if(this._tagsHistory.length === 0) return;
       this.searchTag(this._tagsHistory[0])
    }

    searchTag(tag: string, replaceTo: boolean = false) {
        if (replaceTo) {
            this.buttonSearch = tag;
        }
        if (tag.length === 0) return;
        this.organizeHistory(tag);
        const params = new HttpParams()
            .set('api_key', API_GIFS_KEY)
            .set('limit', 12)
            .set('q', tag)

        this.gifList$ = this.http.get<ReponseSearch>(`${this.serviceUrl}/search`, {params})
        .pipe(
            map((response) => {
                return response.data;
            })
        )
    }
}
