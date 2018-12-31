import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Holiday} from '../../../../Models/Holiday';
import {HolidayService} from '../../../../Services/holiday.service';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-listholidays',
  templateUrl: './listholidays.component.html',
  styleUrls: ['./listholidays.component.css']
})
export class ListholidaysComponent implements OnInit {

  holidays: Holiday[];

  constructor(private hs: HolidayService,public router: Router) {
    this.hs.getHolidaysRemote().subscribe(data => this.holidays = data);
  }
  ngOnInit() {
  }

}
