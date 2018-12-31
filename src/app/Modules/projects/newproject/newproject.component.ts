import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import {Client} from '../../../Models/Client';
import {Project} from '../../../Models/Project';
import {ProjetService} from '../../../Services/projet.service';


@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  clients: Client[] = [];

  ProjectTypeText: string;
  dateDebutText: string;
  dateFinText: string;
  noteText: string;
  addressText: string ;

  projectText: Project;


  constructor(private service: ProjetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.service.getListClient().subscribe(data => {this.clients = data,
  console.log(this.clients); });
  }

  naviagte() {

    this.router.navigate(['/listProjects']);
  }

  AddProject(project: Project) {

    const newProject: object = {

      startDate: this.dateDebutText,
      endDate: this.dateFinText,
      projectType: 'NewProject',
      address: this.addressText,
      note : this.noteText,




    };



    this.service.AddProject(newProject)
      .subscribe();

    this.router.navigate(['/logged/listProjects']);
  }

}
