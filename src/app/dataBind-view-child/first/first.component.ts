import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  username: any;
  userNameSand:any

  constructor() { }

  ngOnInit(): void {
  }
  childvalue() {

    this.userNameSand=this.username
    console.log(this.userNameSand);
  }

}
// @ViewChild(SecondComponent)
//   private counterComponent!: SecondComponent;
//   seconds() { return 0; }
//  ngOnInit()
//  {
 
//  }
//   ngAfterViewInit() {
//   // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
//   // but wait a tick first to avoid one-time devMode
//   // unidirectional-data-flow-violation error
//   setTimeout(() => this.seconds = () =>this.counterComponent.seconds, 0);
//   }
//   start() { this.counterComponent.start(); }
//   stop() { this.counterComponent.stop(); }
//  }