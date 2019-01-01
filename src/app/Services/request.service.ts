import { Injectable } from '@angular/core';
import {ClientService} from './client.service';
import {Observable} from 'rxjs/Observable';
import {Client} from '../Models/Client';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Request} from '../Models/Request';
import {Message} from '../Models/Message';
import {UserService} from './user.service';
const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    })
};
@Injectable()
export class RequestService {
    public static URI = 'http://localhost:18080/map-web/rest/';

  constructor(private http: HttpClient) { }
    getRequests ()  {
        return this.http.get("http://localhost:18080/map-web/rest/req/getall",httpOptions);
    }
    getRequestsValide ()  {
        return this.http.get("http://localhost:18080/map-web/rest/req/Status",httpOptions);
    }

    getRequestsnonValide ()  {
        return this.http.get("http://localhost:18080/map-web/rest/req/stat",httpOptions);
    }

  ValiderRequest  (id)  {
        return this.http.get("http://localhost:18080/map-web/rest/req/valider?idreq="+id,httpOptions);
    }



    Delete  (id)  {
        return this.http.delete("http://localhost:18080/map-web/rest/req/"+id,httpOptions);
    }
    AddRequest(cost :number,startdate : string,endtdate : string,duration :string , type : string,id : number) {
        return this.http.post("http://localhost:18080/map-web/rest/req/add?idcl=" + id + "&idad=1", {
            cost: cost,
            duration: duration,
            endDate: endtdate,
            startDate: startdate,
            typeressource: type

        })


    }
}
