import {Component, HostListener, OnInit} from '@angular/core';
import {MandateService} from '../../../Services/mandate.service';
import {Project} from '../../../Models/Project';
import {Ressource} from '../../../Models/Ressource';
import {Mandate} from '../../../Models/Mandate';


@Component({
  selector: 'app-all-mandates',
  templateUrl: './all-mandates.component.html',
  styleUrls: ['./all-mandates.component.css']
})
export class AllMandatesComponent implements OnInit {
    mandates: Mandate [];
    clicked = false;
    resources: Ressource [];


    EndedMandates: Mandate [];


    constructor(private mandateService: MandateService) {
    }


    ngOnInit() {
        this.listMandates();

    }

    listMandates() {
        this.mandateService.getMandates().subscribe(
            data => {
                this.mandates = data;
            });

    }

}
