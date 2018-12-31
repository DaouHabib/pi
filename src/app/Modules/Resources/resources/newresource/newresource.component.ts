import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Availability, Resource} from '../../../../Models/Resource';
import {ResourcesService} from '../../../../Services/resources.service';

@Component({
  selector: 'app-newresource',
  templateUrl: './newresource.component.html',
  styleUrls: ['./newresource.component.css']
})
export class NewresourceComponent implements OnInit {

  resource: Resource = new Resource();
  resForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  selectedFile : File = null;
  added: boolean = false;



  constructor(private fb: FormBuilder, public router: Router, private rs : ResourcesService) {
    this.createForm();
  }

  ngOnInit() {
  }
  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];
  }
  createForm() {
    this.resForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
      sector: [''],
      photo: ['']
    });

  }

  ajouter() {
    this.resource.availability = Availability.Available;
    this.resource.sector = this.resForm.get('sector').value;
    this.resource.emailAddress = this.resForm.get('email').value;
    this.resource.name = this.resForm.get('nom').value;
    this.resource.photo = "Default.jpeg";
    this.resource.seniority = 0;
    this.resource.rate = 0;
    this.rs.ajouter(this.resource);
    console.log(this.resource);
    this.resForm.reset();
    this.added = true;
    //this.router.navigate(['/logged/resources']);

  }
  fermer()
  {
    this.added = false;
  }

}
