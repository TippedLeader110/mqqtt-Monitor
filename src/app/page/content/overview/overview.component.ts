import { Component, OnInit, HostBinding } from '@angular/core';
import { GetService } from '../../../service/pintu/get.service';
import { getInterface } from '../../../interface/pintu/getInterface';
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

  constructor(private getServ:GetService) {
    this.tablePintucall();
   }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  interval

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.tablePintucall();
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

}
