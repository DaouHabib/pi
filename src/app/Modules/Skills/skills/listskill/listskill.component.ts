import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {Skill} from '../../../../Models/Skill';
import {SkillService} from '../../../../Services/skill.service';


@Component({
  selector: 'app-listskill',
  templateUrl: './listskill.component.html',
  styleUrls: ['./listskill.component.css']
})
export class ListskillComponent implements OnInit {

  skills: Skill[];
  categories: String[];
  page = 1;

  constructor(private ss: SkillService,public router: Router) {
    this.ss.getSkillsRemote().subscribe(data => this.skills=data);
    this.ss.getCategoriesRemote().subscribe(data => this.categories = data);
  }
  searchtext : string = "";

  ngOnInit() {
  }
  supprimer(selectedId: number){
    this.ss.delete(selectedId);
    this.router.navigate(['/logged/skills']);
  }

  search() {
    if (this.searchtext.length > 0){
        this.ss.searchSkills(this.searchtext).subscribe(data => this.skills=data);
    }else{
      this.ss.getSkillsRemote().subscribe(data => this.skills = data);
    }
  }

}
