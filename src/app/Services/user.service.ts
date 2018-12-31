import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import {User} from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
    public static URI = 'http://localhost:18080/map-web/rest/';
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public UserC: User = new User();

    constructor(private http: HttpClient) { }

    /*login(emailAddress: string, password: string) {
        return this.http.post<any>(UserService.URI + 'authentication', { emailAddress, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));

                    this.currentUserSubject.next(user);
                }

                return user;
            }))
    }*/

login(emailAddress: string, password: string) {
    this.http.post<any>(UserService.URI + 'authentication', {emailAddress, password}).subscribe(
        res=>{console.log(res); this.UserC=res;  localStorage.setItem('currentUser', JSON.stringify(this.UserC));},err=>{console.log(err);this.UserC=err;}



    );


}

getcurrentUser(){return this.UserC;}
}
