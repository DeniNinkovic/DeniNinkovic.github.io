import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './dashboard/about/about.component';
import {SkillsComponent} from './dashboard/skills/skills.component';


const routes: Routes = [
    {
        path: '', redirectTo: 'about', pathMatch: 'full'
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'skills', component: SkillsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
