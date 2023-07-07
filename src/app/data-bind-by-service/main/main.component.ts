import { Component, OnInit } from '@angular/core';
import { DataBindService } from '../data-bind.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public bindData:DataBindService) { }

  ngOnInit(): void {
  }

}
