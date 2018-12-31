import {UserType} from './UserType';
import {Project} from './Project';

export class Ressource
{
    userId: number;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    lat: number;
    longi: number;
    name: string;
    userType: UserType;
    photo: string;
    availability: string;
    sector: string;
    seniority: number;
    note: string;
    rate: number;
    contractType: string;
    project: number;
    phoneNumber: number;

}