import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name: any;
  OTP:any=[];

  constructor(private service:ServiceService) { }

  title:string="Binding"

  ngOnInit(): void {
 }
// gnerate OTP Function
genartOtp(){
  this.OTP=[]
  var digits='0123456789';
  let otp='';
  for(let i=0;i<=6;i++){
    this.OTP +=digits[Math.floor(Math.random() *10)];
  }
  this.service.otpData.next(this.OTP)
  return this.OTP
}
}
