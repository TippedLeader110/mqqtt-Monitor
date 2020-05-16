import { Component, OnInit } from '@angular/core';
import { GetOver } from '../../../interface/listrik/get-over';
import { GetService } from '../../../service/pintu/get.service';
import * as CanvasJS from 'canvasjs.min';

@Component({
  selector: 'app-listrik',
  templateUrl: './listrik.component.html',
  styleUrls: ['./listrik.component.css']
})
export class ListrikComponent implements OnInit {
  satuanHarga = 0.4
  listrik:GetOver[] = []
  dataPoints = []
  allListrik:GetOver[] = []
  interval
  dpsLength = 0
  constructor(private getServ:GetService) {
    this.getListrik();
    this.chartListrik();
  }

  ngOnInit(): void {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
      
    chart.render();
    this.interval = setInterval(() => {
      this.getListrik();
    }, 3000)
  }

  getListrik(){
    this.getServ.ambilListrikOverview().subscribe(
      result => {
        this.listrik = result
      },
      error => {
        console.error(error)
      }
    )
  }

  getAlllistrik(){
    this.getServ.ambilListrik().subscribe(
      result => {
        this.allListrik = result
      },
      error => {
        console.error(error)
      }
    )
  }

  chartListrik(){
    
  }

}
