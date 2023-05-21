import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss'],
})
export class CallComponent {
  private authId: string = 'MAYWVLMZBMZDJKYZBKYT';
  private authToken: string = 'YzhjYmE4MGYzZDhmN2JjNTMyMmE1OTFlZWE2MWM3';

  public from: string = '';
  public to: string = '';
  public callInProgress: boolean = false;
  public callComplete: boolean = false;
  public errorMessage: string = '';
  public baseUrl: string = 'https://api.plivo.com/v1/Account/';

  constructor(private http: HttpClient) { }

  makeCall() {
    this.callInProgress = true;

    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.authId}:${this.authToken}`)}`,
      'Content-Type': 'application/json',
    });

    const options = { headers: headers };

    const body = {
      from: this.from,
      to: this.to,
      app_name: 'App-1791554-Outbound',
      answer_url: 'https://kalesha-sk.github.io/xmldoc/OutboundXml.xml',
      answer_method: 'GET',
      hangup_url: 'https://s3.amazonaws.com/plivosamplexml/speak_url.xml',
      hangup_method: 'GET',
      fallback_url: 'https://s3.amazonaws.com/plivosamplexml/fallback_url.xml',
      fallback_method: 'GET',
    };

    this.http
      .post(this.baseUrl + this.authId + '/Call', body, options)
      .pipe(
        catchError((err) => {
          this.errorMessage = `Error making call: ${err.message}`;
          this.callInProgress = false;
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          this.callComplete = true;
        }
      });

    this.http
      .get('https://kalesha-sk.github.io/xmldoc/OutboundXml.xml')
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );

    this.http
      .get('https://s3.amazonaws.com/plivosamplexml/fallback_url.xml')
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
