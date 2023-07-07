import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  parentdata: any;

  username: any
  constructor() { }

  ngOnInit(): void {

  }

  submitData() {
    debugger;
    console.log(this.username)
    this.parentdata = this.username
    console.log(this.parentdata)
  }

}
