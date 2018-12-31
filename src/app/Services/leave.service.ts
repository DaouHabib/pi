import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Leave} from '../Models/Leave';
import {Observable} from 'rxjs/Observable';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { isNumber, toInteger, padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable()
export class LeaveService {

  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:18080/map-web/rest/leaves';

  getLeavesRemote(): Observable<Leave[]> {
    return this.http.get<Leave[]>(this.url);
  }

  grantleave(id: number): Observable<string> {
    return this.http.get<string>(this.url + '/grant?id=' + id);
  }

}


@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {day: toInteger(dateParts[0]), month: null, year: null};
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: null};
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: toInteger(dateParts[2])};
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    return date ?
      `${isNumber(date.day) ? padNumber(date.day) : ''}/${isNumber(date.month) ? padNumber(date.month) : ''}/${date.year}` :
      '';
  }
}
