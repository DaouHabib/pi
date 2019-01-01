import {Component, OnInit} from '@angular/core';
import {User} from '../../Models/User';
import {UserType} from '../../Models/UserType';
import {Router} from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    user: User = new User();
userType : UserType;
c : UserType = UserType.Client;
a : UserType =UserType.Administrator ;
r :UserType = UserType.Resource;

    constructor(private root: Router) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user);

    }

    ngOnInit() {
    }
    logout()
    {
        this.root.navigate(['/']);

    }

}
