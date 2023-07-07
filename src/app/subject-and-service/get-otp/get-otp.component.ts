import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-get-otp',
  templateUrl: './get-otp.component.html',
  styleUrls: ['./get-otp.component.css']
})
export class GetOtpComponent implements OnInit {
  showOtp: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.otpData.subscribe((otp: any) => {
      this.showOtp = otp
    })
    console.log(this.showOtp)
  }

}
