import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent {
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
      app_name: 'ConferenceCall',
      answer_url: 'https://kalesha-sk.github.io/xmldoc/ConferenceXml.xml',
      answer_method: 'GET',
      hangup_url: 'https://s3.amazonaws.com/plivosamplexml/hangup_url.xml',
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
      .get('https://kalesha-sk.github.io/xmldoc/ConferenceXml.xml')
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
