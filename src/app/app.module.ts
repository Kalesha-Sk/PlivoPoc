import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsComponent } from './sms/sms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CallComponent } from './call/call.component';
import { ReceiveComponent } from './receive/receive.component';
import { ConferenceComponent } from './conference/conference.component';
import { ConferenceXMLComponent } from './conference-xml/conference-xml.component';

@NgModule({
  declarations: [AppComponent, SmsComponent, CallComponent, ReceiveComponent, ConferenceComponent, ConferenceXMLComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
