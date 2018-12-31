import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HolidayService} from '../../../../Services/holiday.service';
import {NgbDateParserFormatter, NgbDatepicker, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newholiday',
  templateUrl: './newholiday.component.html',
  styleUrls: ['./newholiday.component.css']
})
export class NewholidayComponent implements OnInit {

  startdate: Date;
  enddate: Date;
  name: string;
  holidayForm: FormGroup;
  added: boolean = false;
  constructor(private fb: FormBuilder,private hs: HolidayService,public router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.holidayForm = this.fb.group({
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
    })

  }
  close()
  {
    this.added = false;
  }
  ajouter() {
    this.startdate = new Date(this.format(this.holidayForm.get('startdate').value));
    this.enddate = new Date(this.format(this.holidayForm.get('enddate').value));
    this.name = this.holidayForm.get('name').value;
    this.hs.ajouter(this.startdate,this.enddate,this.name);
    this.added=true;
    this.holidayForm.reset();
    //this.router.navigate(['/logged/holidays']);

  }

  format(date: NgbDateStruct): string {
    let stringDate: string = "";
    if(date) {
      stringDate += date.year + "-";
      stringDate += this.isNumber(date.month) ? this.padNumber(date.month) + "-" : "";
      stringDate += this.isNumber(date.day) ? this.padNumber(date.day): "";

    }
    return stringDate;
  }
  padNumber(value: number) {
    if (this.isNumber(value)) {
      return `0${value}`.slice(-2);
    } else {
      return "";
    }
  }

  isNumber(value: any): boolean {
    return !isNaN(this.toInteger(value));
  }

  toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }


}
