import { Injectable } from '@angular/core';
import {Skill} from '../Models/Skill';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SkillService {

  constructor(private http : HttpClient) { }
  url = "http://localhost:18080/map-web/rest/skills";
  skill : Skill = new Skill();

  getSkillsRemote(): Observable <Skill[]> {
    return this.http.get<Skill[]>(this.url) ;

  }
  getCategoriesRemote(): Observable <String[]>{
    return this.http.get<String[]>(this.url+"/categories");
  }
  ajouter(cat:string, nom:string)
  {
    this.skill.category = cat;
    this.skill.name = nom;
    this.http.post(this.url, {
      category: cat,
      name: nom
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("TAJOUTA");
        }
      );
  }
  delete(selectedId: number)
  {
    console.log("wsel houni");
    console.log(this.url+"?id="+selectedId);
    return this.http.delete(this.url+"?id="+selectedId);
  }
  searchSkills(searchtext){
    return this.http.get<Skill[]>(this.url+"?name="+searchtext);
}

}
