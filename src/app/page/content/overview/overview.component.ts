import { Component, OnInit, HostBinding } from '@angular/core';
import { GetService } from '../../../service/pintu/get.service';
import { getInterface } from '../../../interface/pintu/getInterface';

import { GetOver } from '../../../interface/listrik/get-over';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export interface pintu {
  stat: string;
  id: string;
  time: string;
}



@Component({
  selector: 'app-overview',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'stat', 'time'];
  tablePintu:getInterface[] = []
  satuanHarga = 0.4
  listrik:GetOver[] = []
  dataPoints = [];
  dpsLength = 0;
  namaKawan = "Nurul"

  constructor(private getServ:GetService) {
    this.tablePintucall();
    this.getListrik();
   }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  interval

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.tablePintucall();
      this.getListrik();
    }, 3000)
    
  }

  tablePintucall(){
    this.getServ.ambilOverview().subscribe(
      result => {
        this.tablePintu = result
      },
      error => {
        console.error(error)
      }
    )
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

}
