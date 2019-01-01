import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Client} from '../Models/Client';
import {Project} from '../Models/Project';

@Injectable()
export class ClientService {
    public static URI = 'http://localhost:18080/map-web/rest/';

  constructor(private http: HttpClient) { }
    getClients (): Observable<Client[]> {
        return this.http.get<Client[]>("http://localhost:18080/map-web/rest/Clients/getall");
    }
    GetallClient  ()  {
        return this.http.get("http://localhost:18080/map-web/rest/Clients/getall");
    }


}
