import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Resume} from '../Models/Resume';
import {Availability, ContractType, Resource} from '../Models/Resource';
import {HttpClient} from '@angular/common/http';
import {UserType} from '../Models/UserType';

@Injectable()
export class ResourcesService {

  constructor(private http : HttpClient) { }
  url = "http://localhost:18080/map-web/rest/resources";
  urlresume = "http://localhost:18080/map-web/rest/resumes";
  resources : Resource = new Resource();
  id: number;
  random : string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);

  getResourcesRemote(): Observable <Resource[]> {
    return this.http.get<Resource[]>(this.url) ;

  }
  ajouter(res:Resource)
  {
    /*this.http.post(this.url+"/user", {
      emailAddress: res.emailAddress,
      name: res.name,
      userType: UserType.Resource.toString(),
      password: this.random,
      confirmPassword: this.random
    }).subscribe(
      res => {
        console.log("user: post : return => "+Number(res));
        this.id = Number(res);
      },
      err => {
        console.log("user2: post: return => "+err);
        this.id = Number(err);

      }
    );*/
    this.http.post(this.url, {
      emailAddress: res.emailAddress,
      name: res.name,
      userType: UserType.Resource.toString(),
      password: this.random,
      confirmPassword: this.random,
      userId: this.id,
      photo: res.photo,
      contractType: ContractType.InterMandate.toString(),
      seniority: res.seniority,
      availability: Availability.Available.toString(),
      rate: res.rate,
      sector: "Not assigned"

    })
      .subscribe(
        res => {
          console.log("res: post: return => "+res)
        },
        err => {
          console.log("res2: post: return => " +err);
        }
      );

  }
  searchResource(searchtext){
    return this.http.get<Resource[]>(this.url+"?name="+searchtext) ;

  }
  getResourceById(id: string): Observable <Resource> {
    return this.http.get<Resource>(this.url+"?id="+id) ;

  }
  getResume(id: number): Observable <Resume>{
    return this.http.get<Resume>(this.urlresume+"?id="+id);
  }

}
