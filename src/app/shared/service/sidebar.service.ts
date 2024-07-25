import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SidebarService {
    private _state: boolean = false;
    constructor() { }

    get state() {
        return this._state
    }

    showSidebar(status: boolean){
        this._state = status;
    }

}
