import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AboutComponent} from './dashboard/about/about.component';
import {SkillsComponent} from './dashboard/skills/skills.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './dashboard/experience/experience.component';
import { EducationComponent } from './dashboard/education/education.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { GeneralInformationComponent } from './dashboard/general-information/general-information.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        AboutComponent,
        SkillsComponent,
        ExperienceComponent,
        EducationComponent,
        ContactComponent,
        GeneralInformationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
