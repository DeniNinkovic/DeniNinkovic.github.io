import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../services/layout.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit(): void {
    }
}
