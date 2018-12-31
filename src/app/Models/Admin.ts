import {Request} from './Request';
import {Message} from './Message';
import {ClientCategory} from './ClientCategory';
import {ClientType} from './ClientType';
import {UserType} from './UserType';

export class Admin {
    userId: number;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    lat: number;
    longi: number;
    name: number;
    userType: UserType;


    RequestList :     Request [];
    sends :Message[];







}