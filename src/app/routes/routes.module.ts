import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../Modules/user/user.component';
import {LayoutComponent} from '../Modules/layout/layout.component';
import {HomeComponent} from '../Modules/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {UserService} from '../Services/user.service';
import {MapMandateComponent} from '../Modules/Mandates/map-mandate/map-mandate.component';
import {ClientService} from '../Services/client.service';
import {AllMandatesComponent} from '../Modules/Mandates/all-mandates/all-mandates.component';
import {MandateService} from '../Services/mandate.service';
import {RequestComponent} from '../Modules/request/request.component';
import {MapClientComponent} from '../Modules/map-client/map-client.component';
import {AddRequestComponent} from '../Modules/add-request/add-request.component';
import {SkillsComponent} from '../Modules/Skills/skills/skills.component';
import {ListskillComponent} from '../Modules/Skills/skills/listskill/listskill.component';
import {NewskillComponent} from '../Modules/Skills/skills/newskill/newskill.component';
import {HolidaysComponent} from '../Modules/Holidays/holidays/holidays.component';
import {ListholidaysComponent} from '../Modules/Holidays/holidays/listholidays/listholidays.component';
import {NewholidayComponent} from '../Modules/Holidays/holidays/newholiday/newholiday.component';
import {ResourcesComponent} from '../Modules/Resources/resources/resources.component';
import {ListresourcesComponent} from '../Modules/Resources/resources/listresources/listresources.component';
import {NewresourceComponent} from '../Modules/Resources/resources/newresource/newresource.component';
import {ResourceDetailComponent} from '../Modules/Resources/resources/resource-detail/resource-detail.component';
import {LeaveComponent} from '../Modules/Leaves/leave/leave.component';
import {ListleaveComponent} from '../Modules/Leaves/leave/listleave/listleave.component';
import {ManageleaveComponent} from '../Modules/Leaves/leave/manageleave/manageleave.component';
import {NewleaveComponent} from '../Modules/Leaves/leave/newleave/newleave.component';
import {TestComponent} from '../Modules/test/test.component';
import {SuggestResourceComponent} from '../Modules/Mandates/suggest-resource/suggest-resource.component';
import {ArchivedMandatesComponent} from '../Modules/Mandates/archived-mandates/archived-mandates.component';
import {ProjectsComponent} from '../Modules/projects/projects.component';
import {ListprojectsComponent} from '../Modules/projects/listprojects/listprojects.component';
import {NewprojectComponent} from '../Modules/projects/newproject/newproject.component';
import {UpdateComponent} from '../Modules/projects/update/update.component';
import {ProjetService} from '../Services/projet.service';
import {NgxPaginationModule} from 'ngx-pagination';




const routes: Routes = [
    {path: '' , redirectTo: 'login' , pathMatch: 'full' },
    {path: 'login' , component: UserComponent},
    {path: 'logged' , component: LayoutComponent , children : [
            {path: 'Home' , component: HomeComponent},
            {path: 'MapMandate' , component: MapMandateComponent},
            {path: 'allMandates' , component: AllMandatesComponent},
            {path: 'Requests' , component: RequestComponent},
            {path: 'MapClient' , component: MapClientComponent},

            {path: 'AddRequest' , component: AddRequestComponent},
            {path: 'Suggest' , component: SuggestResourceComponent},
            {path: 'archivedMandates' , component: ArchivedMandatesComponent},
            {path: 'projects' , component: ProjectsComponent},
            {path: 'listProjects' , component: ListprojectsComponent},
            {path: 'newProjects' , component: NewprojectComponent},
            {path: 'update/:id' , component: UpdateComponent},
            {path: 'test' , component: TestComponent},

            { path: 'skills', component: SkillsComponent, children:[
                    {path:'',component:ListskillComponent},
                    {path:'new' , component: NewskillComponent}
                ] },
            { path: 'holidays', component:HolidaysComponent, children:[
                    {path:'', component:ListholidaysComponent},
                    {path:'new', component:NewholidayComponent}
                ]},
            { path: 'resources', component:ResourcesComponent, children:[
                    {path: '',component:ListresourcesComponent},
                    {path: 'new',component:NewresourceComponent},
                    {path: 'details/:resourceId',component:ResourceDetailComponent}
                ]},
            { path: 'leave', component:LeaveComponent, children:[
                    {path: '',component:ListleaveComponent},
                    {path: 'manage',component:ManageleaveComponent, children:[
                            {path:'resource/details/:resourceId',component:ResourceDetailComponent}
                        ]},
                    {path:'new',component:NewleaveComponent}
                ]}




        ]}
];


@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule, HttpClientModule, BrowserModule],
    providers: [
        UserService,
        ClientService,
        MandateService,
        ProjetService,
        NgxPaginationModule
    ],
    exports: [RouterModule],
  declarations: []
})
export class RoutesModule { }
