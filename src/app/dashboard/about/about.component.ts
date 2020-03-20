import {Component, OnInit} from '@angular/core';
import {faFacebook, faInstagram, faJava, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    faJava = faJava;
    faInstagram = faInstagram;
    faFacebook = faFacebook;
    faLinkedin = faLinkedin;

    constructor() {
    }

    ngOnInit(): void {
    }

}
