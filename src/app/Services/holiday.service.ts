import { Injectable } from '@angular/core';
import {Holiday} from '../Models/Holiday';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HolidayService {

  constructor(private http : HttpClient) { }
  url = "http://localhost:18080/map-web/rest/holidays";
  holiday : Holiday = new Holiday();

  getHolidaysRemote(): Observable <Holiday[]> {
    return this.http.get<Holiday[]>(this.url) ;

  }
  ajouter(startdate: Date, enddate: Date,name:string)
  {
    this.holiday.name = name;
    this.holiday.startDate = startdate;
    this.holiday.endDate = enddate;
    this.http.post(this.url, {
      name: this.holiday.name,
      startDate: this.holiday.startDate,
      endDate: this.holiday.endDate
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("TAJOUTA");
        }
      );
  }

}
