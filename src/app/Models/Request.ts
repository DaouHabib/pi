import {Client} from './Client';
import {Admin} from './Admin';

export class Request {


    requestId : number;
      duration : number;
      cost : number;
      startDate :Date;
      endDate :Date;
      typeressource :string;
      Status :boolean;

      reqadmin :Admin;
      reqcl :Client;



}