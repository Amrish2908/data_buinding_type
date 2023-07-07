import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name:any
  constructor() { }

  ngOnInit(): void {
  }
  userName(event: any) {
    this.name=event
  }

}
