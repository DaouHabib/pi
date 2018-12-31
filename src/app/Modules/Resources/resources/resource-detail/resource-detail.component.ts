import {Component, OnInit} from '@angular/core';
import {Resource} from '../../../../Models/Resource';
import {Resume} from '../../../../Models/Resume';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourcesService} from '../../../../Services/resources.service';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  resource: Resource = new Resource();
  resume: Resume = new Resume();
  resumeshow: boolean;
  skillcount: number;
  hasresume: boolean = true;

  constructor(private rs: ResourcesService, public router: Router,private route: ActivatedRoute) {
    this.rs.getResourceById(this.route.snapshot.paramMap.get('resourceId')).subscribe(data => this.resource = data);
    this.resumeshow=false;
  }

  ngOnInit() {
  }

  showresume()
  {
    //this.rs.getResume(this.resource.resumeId).subscribe(data => this.resume = data);
    console.log(this.resume);
    if(this.resume.skills == null)
    {
      this.hasresume = false;
    }
    else{
      this.resume = this.resource.resume;
      this.skillcount = this.resume.skills.length;
      this.resumeshow=true;
    }
  }
  hideresume()
  {
    this.resumeshow=false;
  }
  showhistory(id: number)
  {

  }
  fermer()
  {
    this.hasresume = true;
  }
}
