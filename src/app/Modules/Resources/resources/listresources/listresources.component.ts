import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Excel from "exceljs/dist/exceljs.min.js";
import {Resource} from '../../../../Models/Resource';
import {ResourcesService} from '../../../../Services/resources.service';

;

@Component({
  selector: 'app-listresources',
  templateUrl: './listresources.component.html',
  styleUrls: ['./listresources.component.css']
})
export class ListresourcesComponent implements OnInit {

  resources : Resource[];
  name: string;
  sName:string;
  excelFileName:string;
  searchtext : string = "";

  //blobType: string = "text/plain;charset=utf-8";
  blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  cols =['Name','Email','Availability','Sector','Contract','Seniority'];
  constructor(private rs: ResourcesService,public router: Router) {
    this.rs.getResourcesRemote().subscribe(data => this.resources = data);
    this.sName = 'ResourcesList';
    this.excelFileName = 'ResourcesList.xlsx';
  }
  ngOnInit() {
  }
  search() {
    if (this.searchtext.length > 0){
      this.rs.searchResource(this.searchtext).subscribe(data => this.resources=data);
    }else{
      this.rs.getResourcesRemote().subscribe(data => this.resources = data);
    }
  }
  exportToExcel()
  {
    var workbook = new Excel.Workbook();
    workbook.creator = 'Yosri';
    workbook.lastModifiedBy ='Yosri';
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.addWorksheet(this.sName, { views: [{ state: 'frozen', ySplit: 3, xSplit: 2, activeCell: 'A1', showGridLines: false }] })
    var sheet = workbook.getWorksheet(1);
    var head1 = ["Resources List as of "+new Date()];
    sheet.addRow(head1);
    sheet.addRow("");
    sheet.getRow(3).values = this.cols;
    sheet.columns = [
      { key: 'name' },
      { key: 'emailAddress' },
      { key: 'availability' },
      { key: 'sector' },
      { key: 'contractType'},
      { key: 'seniority' }
    ];
    sheet.addRows(this.resources);
    workbook.xlsx.writeBuffer().then(data => {
      var blob = new Blob([data], { type: this.blobType });
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      a.download = this.excelFileName;
      a.click();
      //adding some delay in removing the dynamically created link solves the problem in FireFox
      //setTimeout(function() {window.URL.revokeObjectURL(url);},0);
      //FileSaver.saveAs(blob, this.excelFileName, true);
    });
  }

}
