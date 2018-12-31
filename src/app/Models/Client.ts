import {ClientCategory} from './ClientCategory';
import {ClientType} from './ClientType';

export class Client {
    userId: number;
      clientType: ClientType;
      clientCategory: ClientCategory;
      clientLogo: string;
   clientNote: string;
      clientAddress: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    lat: number;
    longi: number;
    name: string;
    userType: string;
    phoneNumber: number;

}
