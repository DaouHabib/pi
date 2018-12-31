import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Project} from '../../../Models/Project';
import {ProjetService} from '../../../Services/projet.service';

@Component({
  selector: 'app-listprojects',
  templateUrl: './listprojects.component.html',
  styleUrls: ['./listprojects.component.css']
})
export class ListprojectsComponent implements OnInit {

ListProjects: Project[] = [];

 constructor(private service: ProjetService, private router: Router, private activatedRoute: ActivatedRoute) {


 }
  ngOnInit() {


  const params: any = this.activatedRoute.snapshot.params;
  const id: number = params.id;
  const specialtyname: string = params.specialty;

  this.service.GetListProjects().subscribe(data => {
    this.ListProjects = data; });




  }

  supprimer(p) {
    console.log('supreesion');
    this.ListProjects.splice(this.ListProjects.indexOf(p), 1);
    this.service.delete(p.projectId.toString()).subscribe();
  }












}
