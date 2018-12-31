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
    AddRequest(){this.http.post("/pidev/map-web/rest/mes/addsend?object=test&content=a&type=ada&rssend=2&rsrecu=6",{objet:"test",content:"a",type:"aaa" ,adarssend:2,rsrecu:6}).subscribe(

        (data : any)=>{console.log(data);}
    )}



}
