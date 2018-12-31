import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    emailAddress: string;
    password: string;
    Error: boolean;
  constructor(private service: UserService, private route: Router) {this.Error = true; }

  ngOnInit() {
  }
    Login() {

        this.service.login(this.emailAddress, this.password);

        this.route.navigate(['logged/Home']);


    }

}
