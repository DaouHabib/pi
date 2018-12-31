import {Resource} from './Resource';

export class Leave
{
  leaveId: number;
  startDate: Date;
  endDate: Date;
  granted: boolean;
  taken: boolean;
  resource: Resource;
}
