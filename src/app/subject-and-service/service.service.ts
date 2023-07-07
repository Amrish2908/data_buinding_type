import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  // Subject intial value set nhi krta
  // otpData = new Subject<any>();
  //  BehaviorSubject intial value set krta h
  otpData = new BehaviorSubject<string>('123456')
}
