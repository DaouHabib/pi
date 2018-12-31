import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Project} from '../Models/Project';
import {Observable} from 'rxjs/Observable';
import {Ressource} from '../Models/Ressource';
import {Mandate} from '../Models/Mandate';
import {User} from '../Models/User';
declare let require;
const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    })
};
@Injectable()
export class MandateService {
    public static URI = 'http://localhost:18080/map-web/rest/';



    constructor(private http: HttpClient) {
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(MandateService.URI + 'Projects', httpOptions);
    }

    getResourceProjects(id: number): Observable<Ressource[]> {
        return this.http.get<Ressource[]>(MandateService.URI + 'mandates?resource=' + id);
    }

    suggestResorce(id: number): Observable<Ressource[]> {
        return this.http.get<Ressource[]>(MandateService.URI + 'mandates/suggetion?projectId=' + id);
    }

    addMandate(startdate: Date, endDate: Date, project: number, resource: number) {
        const body = {
            startDate: startdate,
            endDate: endDate,
            mandatepk: {
                resourceId: resource,
                projectId: project
            }
        };
        return this.http.post<Mandate>(
            MandateService.URI + 'mandates',
            body);
    }
    getMandates(): Observable<Mandate[]> {
        return this.http.get<Mandate[]>(MandateService.URI + 'mandates', httpOptions);
    }
    getArchivedMandates(): Observable<Mandate[]> {
        return this.http.get<Mandate[]>(MandateService.URI + 'mandates?archive=true', httpOptions);
    }
    sendSms() {
        const Nexmo = require('nexmo');
        const nexmo = new Nexmo({
            apiKey: '3b688e2b',
            apiSecret: 'xdKWqpsigiRIbF8V'
        });

        const from = 'Nexmo';
        const to = '21652105357';
        const text = 'Hello from Nexmo';

        nexmo.message.sendSms(from, to, text);

    }
    getEndedMandates(): Observable<Mandate[]> {
        return this.http.get<Mandate[]>(MandateService.URI + 'mandates/alert', httpOptions);
    }


}



