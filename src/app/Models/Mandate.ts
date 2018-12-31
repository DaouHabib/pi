import {MandatePK} from './MandatePK';
import {Ressource} from './Ressource';
import {Project} from './Project';

export class Mandate {
   mandatepk: MandatePK ;
  startDate: Date;
    endDate: Date;
    fee: number;
 state: boolean;
project: Project;
resource: Ressource;

}
