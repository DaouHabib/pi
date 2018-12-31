import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../Services/client.service';
import {Client} from '../../../Models/Client';

declare let L;

@Component({
  selector: 'app-map-mandate',
  templateUrl: './map-mandate.component.html',
  styleUrls: ['./map-mandate.component.css']
})
export class MapMandateComponent implements OnInit {
    clients: Client [];

    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
        this.listClients();



    }

    listClients() {
        this.clientService.getClients().subscribe(
            data => {
                this.clients = data;
            });


    }

    Maps() {


    }
}
