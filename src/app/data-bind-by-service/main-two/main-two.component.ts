import { Component, OnInit } from '@angular/core';
import { DataBindService } from '../data-bind.service';

@Component({
  selector: 'app-main-two',
  templateUrl: './main-two.component.html',
  styleUrls: ['./main-two.component.css']
})
export class MainTwoComponent implements OnInit {

  constructor(private bindData:DataBindService) { }

  ngOnInit(): void {
  }
  testButton(){
    this.bindData.myData=" data bind "
  }

}
