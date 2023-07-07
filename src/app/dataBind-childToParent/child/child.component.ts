import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  username: any
  @Output() inputValue = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  childvalue() {
    this.inputValue.emit(this.username)
  }

}
