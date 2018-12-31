import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Project} from '../../../Models/Project';
import {ProjetService} from '../../../Services/projet.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() p : Project = new Project("","","",new Date,new Date)
  constructor(private service : ProjetService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let params :any = this.activatedRoute.snapshot.params;
    let id:number = params.id;
    this.service.getProjectById(id.toString()).subscribe(
      res => this.p = res
      );
  }

  updateProject() {
    let params :any = this.activatedRoute.snapshot.params;
    let id:number = params.id;
    const rdv: object = {
      projectId : id ,
      startDate : this.p.startDate,
      endDate : this.p.endDate,
      projectType : this.p.projectType,
      address : this.p.address, 
      note : this.p.note
    }
    this.service.update(rdv).subscribe()

    this.router.navigate(['/logged/listProjects']);
  }

}
