import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SkillService} from '../../../../Services/skill.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {

  category: string;
  name: string;
  categories: String[];
  skillForm: FormGroup;
  added: boolean = false;

  constructor(private fb: FormBuilder, private ss: SkillService,public router: Router) {
    this.createForm();
    this.ss.getCategoriesRemote().subscribe(data => this.categories = data);
  }

  ngOnInit() {
  }

  createForm() {
    this.skillForm = this.fb.group({
      category: ['', Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    })

  }

  ajouter() {
    this.category = this.skillForm.get('category').value;
    this.name = this.skillForm.get('name').value;
    this.ss.ajouter(this.category,this.name);
    this.added=true;
    //this.router.navigate(['/logged/skills']);

    }
    fermer(){
      this.added = false;
    }

}


