import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './dataBind-childToParent/child/child.component';
import { ParentComponent } from './dataBind-childToParent/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { OneComponent } from './dataBind-parentToChild/one/one.component';
import { TwoComponent } from './dataBind-parentToChild/two/two.component';
import { FirstComponent } from './dataBind-view-child/first/first.component';
import { SecondComponent } from './dataBind-view-child/second/second.component';
import { PromiObserComponent } from './promi-obser/promi-obser.component';
import { MainComponent } from './data-bind-by-service/main/main.component';
import { MainTwoComponent } from './data-bind-by-service/main-two/main-two.component';
import { GetOtpComponent } from './subject-and-service/get-otp/get-otp.component';
import { DemoComponent } from './subject-and-service/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    OneComponent,
    TwoComponent,
    FirstComponent,
    SecondComponent,
    DemoComponent,
    PromiObserComponent,
    MainComponent,
    MainTwoComponent,
    GetOtpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
