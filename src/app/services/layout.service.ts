import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    constructor() {
    }

    isMobile(): boolean {
        return window.innerWidth <= 992;
    }
}
