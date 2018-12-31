import { Component, OnInit } from '@angular/core';
import {Leave} from '../../../../Models/Leave';
import {LeaveService} from '../../../../Services/leave.service';

@Component({
  selector: 'app-manageleave',
  templateUrl: './manageleave.component.html',
  styleUrls: ['./manageleave.component.css']
})
export class ManageleaveComponent implements OnInit {

  leaves: Leave[];
  grantedleaves: Leave[];
  outcome:string;
  upcoming: boolean;
  added: boolean = false;

  constructor(private ls: LeaveService) {
    this.ls.getLeavesRemote().subscribe(data => this.leaves = data);
    this.upcoming = false;
  }


  ngOnInit() {
  }

  grant(id: number)
  {
    this.ls.grantleave(id).subscribe(data => this.outcome = data);
    this.leaves.find(l => l.leaveId == id).granted=true;
    console.log(this.outcome);
    this.added = true;
    //this.ls.getLeavesRemote().subscribe(data => this.leaves = data);

  }
  upcomingleaves()
  {
    this.upcoming=true;
    this.grantedleaves= [];
    for (let l of this.leaves){
      if(l.granted == true)
      {
        this.grantedleaves.push(l);
      }
    }
  }
  awaitingleaves()
  {
    this.upcoming=false;
    this.ls.getLeavesRemote().subscribe(data => this.leaves = data);
  }
  close(){
    this.added = false;
  }

}
