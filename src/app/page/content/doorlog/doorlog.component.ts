import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { GetService } from '../../../service/pintu/get.service';

@Component({
  selector: 'app-doorlog',
  templateUrl: './doorlog.component.html',
  styleUrls: ['./doorlog.component.css']
})
export class DoorlogComponent implements OnInit {

  theData = []
  onRun = 0
  dTopic = ''
  constructor(private _snackBar: MatSnackBar, private getServ:GetService) { }
  maxD = [
    {sort: 0, value: 10 , view: "10"},
    {sort: 1, value: 50 , view: "50"},
    {sort: 2, value: 100 , view: "100"},
    {sort: 3, value: 122 , view: "Unlimited"}
  ];
  selectB = 3
  bentuk = this.maxD[this.selectB].view
  interval 

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
  }

  doStop(){
    this.openSnackBar("Berhenti Subscribe", "dismiss")
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.onRun = 0
  }

  doClear(){
    this.theData = []
  }

  doGo(){
    this.doStop()
    // alert(this.dTopic)
    this.openSnackBar("Subscribe data dari : " + this.dTopic , "dismiss")
    let dataKirim = {
      topic: this.dTopic
    }
    this.interval = setInterval(() => {
      this.getServ.kirimManual(dataKirim).subscribe(
        result => {
          // let pData = {
          //   data : result
          // }
          if(this.selectB == 3){
            this.theData.push(result)
          }
          else{
            if(this.theData.length >= this.maxD[this.selectB].value){
              this.theData.shift()
              this.theData.push(result)
            }
            else{
              this.theData.push(result)
            }
          }
          this.onRun = 1
          console.log(result)
        },
        error => {
          console.error(error)
        }
      )
    }, 3000)
    
  }

}
