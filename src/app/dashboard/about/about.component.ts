import {Component, OnInit} from '@angular/core';
import {faJava} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    faJava = faJava;

    constructor() {
    }

    ngOnInit(): void {
    }

}
