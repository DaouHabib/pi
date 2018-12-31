import { Injectable } from '@angular/core';
import {Project} from '../Models/Project';
import {Observable} from 'rxjs/Observable';
import {Client} from '../Models/Client';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class ProjetService {

    constructor(private http: HttpClient, private router: Router


    ) { }

    GetListProjects(): Observable <Project[]> {


        return this.http.get<Project[]>('http://localhost:18080/map-web/rest/Projects', { headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});

    }

    AddProject(Project: object): Observable <Project[]> {

        console.log('ajout');
        return this.http.post<Project[]>('http://localhost:18080/map-web/rest/Projects', Project);
    }

    getListClient(): Observable<Client[]> {
        return this.http.get<Client[]>('http://localhost:18080/map-web/rest/Clients');
    }
    getProjectById(id: string): Observable<Project> {
        return this.http.get<Project>('http://localhost:18080/map-web/rest/Projects/' + id);
    }

    update (p: object): Observable<string>  {
        console.log('update');
        return this.http.put<string>('http://localhost:18080/map-web/rest/Projects', p);
    }

    delete(id: string)  {
        return this.http.delete('http://localhost:18080/map-web/rest/Projects/' + id);
    }


}
