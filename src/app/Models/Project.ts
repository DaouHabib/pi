import {Client} from './Client';
import {Skill} from './Skill';

export class Project {
    projectId: number;
    address: string;
    endDate: Date;
    levioResources: number;
    note: string;
    otherResources: number;
    profitability: number;
     projectType: string;
    startDate: Date;
    organigramId: number;
    ownerId: number;
    approved: boolean;
    client: Client;
    skillsRequired: Skill[];
    constructor( projectType: string, address: string, note: string, startDate: Date, endDate: Date) {

    }
}
