import { Component, OnInit } from '@angular/core';
import {MandateService} from '../../../Services/mandate.service';
import {Mandate} from '../../../Models/Mandate';

@Component({
  selector: 'app-archived-mandates',
  templateUrl: './archived-mandates.component.html',
  styleUrls: ['./archived-mandates.component.css']
})
export class ArchivedMandatesComponent implements OnInit {
    mandates: Mandate [];

  constructor(private mandateService: MandateService) { }

  ngOnInit() {this.archivedMandates();
  }
  archivedMandates() {
      this.mandateService.getMandates().subscribe(
          data => {
              this.mandates = data;
          });

  }

}
