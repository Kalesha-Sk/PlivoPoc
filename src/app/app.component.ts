import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private route: Router) { }
  title = 'plivo-poc';

  sendSms() {
    this.route.navigate(['sms']);
  }
  sendCall() {
    this.route.navigate(['call']);
  }
  receiveCall() {
    this.route.navigate(['receive']);
  }
  conferenceCall() {
    this.route.navigate(['conference']);
  }
  conferenceCallXml() {
    this.route.navigate(['conferenceXML']);
  }
}
