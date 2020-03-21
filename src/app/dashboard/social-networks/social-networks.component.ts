import {Component, OnInit} from '@angular/core';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-social-networks',
    templateUrl: './social-networks.component.html',
    styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {
    faInstagram = faInstagram;
    faFacebook = faFacebook;
    faLinkedin = faLinkedin;

    constructor() {
    }

    ngOnInit(): void {
    }

}
