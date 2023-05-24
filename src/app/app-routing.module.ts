import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsComponent } from './sms/sms.component';
import { CallComponent } from './call/call.component';
import { ReceiveComponent } from './receive/receive.component';
import { ConferencePhloComponent } from './conference-phlo/conference-phlo.component';
import { ConferenceXMLComponent } from './conference-xml/conference-xml.component';
import { ConferenceComponent } from './conference/conference.component';

const routes: Routes = [
  { path: 'sms', component: SmsComponent },
  { path: 'call', component: CallComponent },
  { path: 'receive', component: ReceiveComponent },
  { path: 'conferencePhlo', component: ConferencePhloComponent },
  { path: 'conferenceXML', component: ConferenceXMLComponent },
  { path: 'conference', component: ConferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
