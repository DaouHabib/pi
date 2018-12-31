import {Client} from './Client';
import {Ressource} from './Ressource';
import {Admin} from './Admin';

export class Message {


    messageId : number;
    object: string;
    content : string;
    type : string;
    dateSend : Date;
    message : string;
    to_user_id : string;
    from_user_id : string;
    clsend : Client;
    clrecu :Client;
    rssend : Ressource;
    rsrecu:Ressource;
    adminsend:Admin;
}