import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBindService {

  constructor() { }
  public myData!: string;
}
