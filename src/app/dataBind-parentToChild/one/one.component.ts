import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @Input() childMessage! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
