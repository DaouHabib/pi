import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LayoutComponent} from './Modules/layout/layout.component';
import {UserComponent} from './Modules/user/user.component';
import {HomeComponent} from './Modules/home/home.component';
import {RoutesModule} from './routes/routes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MapMandateComponent} from './Modules/Mandates/map-mandate/map-mandate.component';
import {AllMandatesComponent} from './Modules/Mandates/all-mandates/all-mandates.component';
import {RequestComponent} from './Modules/request/request.component';
import {DndModule} from 'ng2-dnd';
import {MapClientComponent} from './Modules/map-client/map-client.component';
import {AddRequestComponent} from './Modules/add-request/add-request.component';
import {SkillsComponent} from './Modules/Skills/skills/skills.component';
import {ListskillComponent} from './Modules/Skills/skills/listskill/listskill.component';
import {NewskillComponent} from './Modules/Skills/skills/newskill/newskill.component';
import {HolidaysComponent} from './Modules/Holidays/holidays/holidays.component';
import {ListholidaysComponent} from './Modules/Holidays/holidays/listholidays/listholidays.component';
import {NewholidayComponent} from './Modules/Holidays/holidays/newholiday/newholiday.component';
import {ResourcesComponent} from './Modules/Resources/resources/resources.component';
import {ListresourcesComponent} from './Modules/Resources/resources/listresources/listresources.component';
import {NewresourceComponent} from './Modules/Resources/resources/newresource/newresource.component';
import {ResourceDetailComponent} from './Modules/Resources/resources/resource-detail/resource-detail.component';
import {LeaveComponent} from './Modules/Leaves/leave/leave.component';
import {ListleaveComponent} from './Modules/Leaves/leave/listleave/listleave.component';
import {ManageleaveComponent} from './Modules/Leaves/leave/manageleave/manageleave.component';
import {NewleaveComponent} from './Modules/Leaves/leave/newleave/newleave.component';
import {LeaveService} from './Services/leave.service';
import {ResourcesService} from './Services/resources.service';
import {HolidayService} from './Services/holiday.service';
import {SkillService} from './Services/skill.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './Modules/test/test.component';
import { SuggestResourceComponent } from './Modules/Mandates/suggest-resource/suggest-resource.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ArchivedMandatesComponent } from './Modules/Mandates/archived-mandates/archived-mandates.component';
import { ProjectsComponent } from './Modules/projects/projects.component';
import { ListprojectsComponent } from './Modules/projects/listprojects/listprojects.component';
import { NewprojectComponent } from './Modules/projects/newproject/newproject.component';
import { UpdateComponent } from './Modules/projects/update/update.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        UserComponent,
        HomeComponent,
        MapMandateComponent,
        AllMandatesComponent,
        RequestComponent,
        MapClientComponent,
        AddRequestComponent,
        NewleaveComponent,
        ManageleaveComponent,
        ListleaveComponent,
        LeaveComponent,
        ResourceDetailComponent,
        NewresourceComponent,
        ListresourcesComponent,
        ResourcesComponent,
        NewholidayComponent,
        ListholidaysComponent,
        HolidaysComponent,
        NewskillComponent,
        ListskillComponent,
        SkillsComponent,
        TestComponent,
        SuggestResourceComponent,
        ArchivedMandatesComponent,
        ProjectsComponent,
        ListprojectsComponent,
        NewprojectComponent,
        UpdateComponent
    ],
    imports: [
        BrowserModule, HttpClientModule, RoutesModule, FormsModule, ReactiveFormsModule, DndModule.forRoot(),NgbModule.forRoot(), NgxPaginationModule

    ],
    providers: [SkillService, HolidayService, ResourcesService , LeaveService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
