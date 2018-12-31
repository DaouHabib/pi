import {Skill} from './Skill';

export class Resume{
  resumeId: number;
  description: string;
  note: string;
  ownerId: number;
  skills: Skill[];
}
