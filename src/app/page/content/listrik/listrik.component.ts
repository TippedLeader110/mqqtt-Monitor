import { Component, OnInit } from '@angular/core';
import { GetOver } from '../../../interface/listrik/get-over';
import { GetService } from '../../../service/pintu/get.service';
import * as CanvasJS from '../../../../assets/canvasjs.min';
// import * as CanvasJS from "canvasjs.min"
// import * as CanvasJS from '../../../../assets/canvasjs.min';

@Component({
  selector: 'app-listrik',
  templateUrl: './listrik.component.html',
  styleUrls: ['./listrik.component.css']
})
export class ListrikComponent implements OnInit {
  satuanHarga = 0.4
  listrik:GetOver[] = []
  allListrik:GetOver[] = []
  interval
  dataP = [ ]
  constructor(private getServ:GetService) { }

  ngOnInit(): void {
    this.chartCall()
    this.interval = setInterval(() => {
      this.getListrik()
      this.updateChart()
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

  updateChart(){
    this.getServ.ambilListrik().subscribe(
      result => {
        this.dataP = []
        result.forEach(item => {
         // console.log(item.listrik)
          let tgl = item.time
          let harga = item.listrik*this.satuanHarga
          let temp = { y:harga, label:String(tgl) }
          this.dataP.push(temp)
        });
        // if(result.length != this.dataP.length){
        //   this.dataP = []
        //   result.forEach(item => {
        //     // console.log(item.listrik)
        //     let tgl = "" + item.time + '-2020'
        //     let temp = { y:item.listrik, name:tgl }
        //     this.dataP.push(temp)
        //   });
        // }else{
        //   this.dataP.shift()
        //   let tgl = "" + this.listrik[0].time + '-2020'
        //   let temp = { y:this.listrik[0].listrik, name:tgl }
        //   this.dataP.push(temp)
        // }
        console.log(this.dataP)
        this.chartCall()
        // this.listrik = result
      },
      error => {
        console.error(error)
      }
    )
  }

  chartCall(): void{
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      // animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Riwayat Penggunaan Listrik (Rp)"
      },
      data: [{
        type: "column",
        // showInLegend: true,
        toolTipContent: "Rp.{y}",
        indexLabel: "Rp.{y}",
        dataPoints: this.dataP
      }]
    });
      
    chart.render();
  }
}

