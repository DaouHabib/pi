import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../Services/client.service';
import {Client} from '../../Models/Client';
declare let L;

@Component({
  selector: 'app-map-client',
  templateUrl: './map-client.component.html',
  styleUrls: ['./map-client.component.css']
})
export class MapClientComponent implements OnInit {
    clients: Client [];

    constructor(private clientService: ClientService) { }

    ngOnInit() {
        this.listClients();
        this.Maps();




    }
    listClients() {
        this.clientService.getClients().subscribe(
            data => {
                this.clients = data;
            });

    }
    Maps()
    {
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            id: 'mapbox.streets-v10',
        }).addTo(map);

        L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }

}
