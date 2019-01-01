import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {RequestService} from '../../Services/request.service';
import {User} from '../../Models/User';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
    ,
    providers: [ RequestService]
})
export class AddRequestComponent implements OnInit {
  u : User;
  i : boolean =false;
  e : number = 0;
  t : string ="";
  constructor(private RequestService : RequestService) {


      this.u = JSON.parse(localStorage.getItem('currentUser'));



  } newreq = {
        cost : 0,
        type : "",
        duration : '',
        datedeb : '',
        datefin : ''
    }

    clickAdministration(){ this.i =true; this.e=9;this.t="Administration"; this.newreq.cost=this.e;this.newreq.type=this.t;}
    clickInterandat(){ this.i =true ;this.e=50;this.t="Interandat";this.newreq.cost=this.e;this.newreq.type=this.t;}
    click(){ this.i =true ;this.e=100; this.t="Mandat";this.newreq.cost=this.e;this.newreq.type=this.t;}
    other(){ this.i =true ;this.e=0; this.t="";this.newreq.cost=this.e;this.newreq.type=this.t;}
AddRequest ()
{this.RequestService.AddRequest(this.newreq.cost,this.newreq.datedeb,this.newreq.datefin,this.newreq.duration,this.newreq.type,this.u.userId).subscribe(
    (data : any)=>{console.log(data);}

);}
    ngOnInit() {
       }
}

