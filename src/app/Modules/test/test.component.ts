import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HolidayService} from '../../Services/holiday.service';
import {Holiday} from '../../Models/Holiday';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    holidays: Holiday[];

    constructor(private hs: HolidayService,public router: Router) {
        this.hs.getHolidaysRemote().subscribe(data => this.holidays = data);
    }

  ngOnInit() {
  }

}
