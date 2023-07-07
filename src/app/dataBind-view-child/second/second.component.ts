import { Component, OnInit, ViewChild } from '@angular/core';
import { FirstComponent } from '../first/first.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  userDataGet:any;
  test:any

  @ViewChild(FirstComponent) childComponent!: FirstComponent;

  constructor() { }

  ngAfterViewInit()  {

    this.childComponent.userNameSand
    console.log( this.childComponent.userNameSand)
  }
  childvalueParent(){
    this.childComponent.childvalue()
  }

}

 

// }
// intervalId = 0;
// message = '';
// seconds = 0;
// clearTimer() { clearInterval(this.intervalId); }
// ngOnInit() { this.start(); }
// ngOnDestroy() { this.clearTimer(); }
// start() { this.countDown(); }
// stop() {
// this.clearTimer();
// this.message = `Holding at T-${this.seconds} seconds`;
// }
// private countDown() {
// this.clearTimer();
// this.intervalId = window.setInterval(() => {
// this.seconds += 1;
// if (this.seconds === 0) {
// this.message = 'Completed counting!';
// } else {
// if (this.seconds < 0) { this.seconds = 50; } // reset
// this.message = `Vote-${this.seconds} and counting going on`;
// }
// }, 1000);
// }
// }