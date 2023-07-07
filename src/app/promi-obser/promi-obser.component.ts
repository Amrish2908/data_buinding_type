import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-promi-obser',
  templateUrl: './promi-obser.component.html',
  styleUrls: ['./promi-obser.component.css']
})
export class PromiObserComponent implements OnInit {

  test:any;
  constructor() { }

  ngOnInit(): void {

    // // Promise ex.run without subscribe
    // const pr = new Promise((resolve)=>{
    //   console.log("done")
      
    //   setTimeout(()=>{
    //     resolve('yep')
    //   },2000 );    
    // });
  
    // // pr.then((data)=>{
    // //   console.log(data)
    // // })
    // setTimeout(()=>{
    //   pr.then((data)=>{
    //   console.log(data)
    //   })
    // })
    // Promise ex.return singal value
      const pr =new Promise((resolve)=>{
        resolve("hello")
        resolve("sir")
      })
      pr.then(console.log);

    // Observable ex.return singal value
    const obs = new Observable((observable)=>{
      console.log("first")
      console.log("second")
   });
  
      obs.subscribe(console.log);

    // // Observable ex. don't run without subscribe
    // const obs = new Observable((observable)=>{
    //   console.log("done")
      
    //   setTimeout(()=>{
    //     observable.next('yep')
    //   },2000 );    
    // });
  
    // setTimeout(()=>{
    //   obs.subscribe(console.log);
    //   },4000);
  }

}
