import {Component, HostListener, OnInit} from '@angular/core';
import {MandateService} from '../../../Services/mandate.service';
import {Project} from '../../../Models/Project';
import {Ressource} from '../../../Models/Ressource';
import {Mandate} from '../../../Models/Mandate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-suggest-resource',
  templateUrl: './suggest-resource.component.html',
  styleUrls: ['./suggest-resource.component.css']
})
export class SuggestResourceComponent implements OnInit {
    projects: Project [];
    clicked = false;
    resources: Ressource [];
    resourceSuggested: Ressource [];
    currentP: Project;
    startDate: string;
    endDate: string;
    currentR: Ressource;

    constructor(private mandateService: MandateService, private route: Router) { }


      ngOnInit() {this.listProjects();
      }

    modalOpen() {
        document.getElementById('myModal').classList.toggle('d-block');
    }

    listProjects() {
        this.mandateService.getProjects().subscribe(
            data => {
                this.projects = data;
            });

    }

    More(p: Project) {
        this.clicked = true;
        this.currentP = p;
        this.suggestResources(p.projectId);

        this.mandateService.getResourceProjects(p.projectId).subscribe(
            data => {
                this.resources = data;
            });
    }
    suggestResources(id: number) {
        id = this.currentP.projectId;
        this.mandateService.suggestResorce(id).subscribe(
            data => {
                this.resourceSuggested = data;
            });
    }
    saveMandate(mandate: Mandate) {


        this.mandateService.addMandate(this.currentP.startDate, this.currentP.endDate, this.currentP.projectId, this.currentR.userId)
            .subscribe();
        this.route.navigate(['logged/allMandates']);

    }
    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev, r) {
        this.currentR = r;
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        this.modalOpen();
    }

}
