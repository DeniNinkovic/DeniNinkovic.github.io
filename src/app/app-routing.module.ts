import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './dashboard/about/about.component';
import {ExperienceComponent} from './dashboard/experience/experience.component';
import {EducationComponent} from './dashboard/education/education.component';
import {ContactComponent} from './dashboard/contact/contact.component';
import {ToolsMethodsComponent} from './dashboard/tools-methods/tools-methods.component';


const routes: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'tools', component: ToolsMethodsComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'education', component: EducationComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
