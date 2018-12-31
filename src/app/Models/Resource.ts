import {Resume} from './Resume';

export class Resource{
  userId: number;
  photo: string;
  sector: string;
  seniority: number;
  note: string;
  rate: number;
  isOnLeave: boolean;
  isActive: boolean;
  leaveId: number;
  resume: Resume;
  availability: Availability;
  contractType: ContractType;
  name: string;
  emailAddress: string;
  active:boolean;
  onLeave: boolean;
}

export enum Availability{
  Available,
  Unavailable,
  AvailableSoon

}
export enum ContractType{
  Mandate,
  InterMandate,
  Administration

}
