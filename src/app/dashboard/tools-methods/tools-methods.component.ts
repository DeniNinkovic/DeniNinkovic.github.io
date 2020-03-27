import {Component, OnInit} from '@angular/core';
import {faTools} from '@fortawesome/free-solid-svg-icons';
import {LayoutService} from '../../services/layout.service';

@Component({
    selector: 'app-tools-methods',
    templateUrl: './tools-methods.component.html',
    styleUrls: ['./tools-methods.component.scss']
})
export class ToolsMethodsComponent implements OnInit {
    faTools = faTools;

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit(): void {
    }

}
