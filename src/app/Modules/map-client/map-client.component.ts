import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../Services/client.service';
import {Client} from '../../Models/Client';
import {forEach} from '@angular/router/src/utils/collection';
import {Observable} from 'rxjs/Observable';
declare let L;

@Component({
  selector: 'app-map-client',
  templateUrl: './map-client.component.html',
  styleUrls: ['./map-client.component.css']
})
export class MapClientComponent implements OnInit {
    clients: Client [];


    i:number;
    constructor(private clientService: ClientService) { }

    ngOnInit() {
        this.listClients();
        this.Maps();




    }
    listClients() {
        this.clientService.GetallClient().subscribe(
            (data : any)=> {
                this.clients=(data) ;
                console.log(this.clients);

            });

    }
    Maps() {
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
