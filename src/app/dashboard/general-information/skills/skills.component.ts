import {Component, OnInit} from '@angular/core';
import {faAngular, faCss3, faDocker, faGit, faHtml5, faJava, faJs, faPython, faReact} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    faAngular = new Skill(faAngular, 'Angular', 7);
    faJava = new Skill(faJava, 'Java', 8);
    faReact = new Skill(faReact, 'ReactJS', 6);
    faDocker = new Skill(faDocker, 'Docker', 5);
    faGit = new Skill(faGit, 'Git', 8);
    faJs = new Skill(faJs, 'JavaScript', 8);
    faCss3 = new Skill(faCss3, 'CSS3', 7);
    faHtml5 = new Skill(faHtml5, 'HTML5', 7);
    faPython = new Skill(faPython, 'Python', 3);
    skillsIcons = [
        this.faJava, this.faAngular, this.faReact, this.faDocker, this.faGit, this.faJs, this.faCss3, this.faHtml5, this.faPython
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

export class Skill {
    public icon: any;
    public name: string;
    public grade: any;

    constructor(icon: any, name: string, grade: any) {
        this.icon = icon;
        this.name = name;
        this.grade = grade;
    }
}
