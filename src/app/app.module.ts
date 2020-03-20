import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './dashboard/about/about.component';
import { SkillsComponent } from './dashboard/skills/skills.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        AboutComponent,
        SkillsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TooltipModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
