import { Component, OnInit } from '@angular/core';
import {Project} from '../../Models/Project';
import {Request} from '../../Models/Request';
import {MandateService} from '../../Services/mandate.service';
import {RequestService} from '../../Services/request.service';
import {Message} from '../../Models/Message';
import {UserService} from '../../Services/user.service';
import {User} from '../../Models/User';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
    providers: [ RequestService,UserService ]

})
export class RequestComponent implements OnInit {
    Requestes: Request [];
    RequestesV: Request [];
Message : any;
    i: number;
   s: any;
    a: number;
    user: User;
    constructor( private Requestservice: RequestService ,private userservice : UserService) { }


    listRequestEnAttente() {
        this.Requestservice.getRequestsnonValide().subscribe(
            (data : any)=>{this.Requestes=data;}

        );
        this.user =JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user)};
    listRequestValide() {
        this.Requestservice.getRequests().subscribe(
            (data : any)=>{this.RequestesV=data;}

        )};


    receivedData: Array<any> = [];
    receivedData2: Array<any> = [];

    transferDataSuccess($event: any) {
        this.receivedData.push($event.dragData);
      this.i  = this.Requestes.indexOf($event.dragData);
        this.Requestservice.ValiderRequest($event.dragData).subscribe(
            (data : any)=>{this.Message=data;}

        )
      this.Requestes.splice(this.i,1);
        console.log($event);

    }
    transferDataSuccess2($event: any) {
        this.receivedData2.push($event.dragData);
        console.log($event);

    }

    delete(id){this.Requestservice.Delete(id).subscribe();this.a= this.RequestesV.indexOf(id); this.RequestesV.splice(this.a,1)}

    ngOnInit() {
       this.listRequestEnAttente();
        this.listRequestValide();}
}
