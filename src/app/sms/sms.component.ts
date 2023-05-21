import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss'],
})
export class SmsComponent {
  private authId: string = 'MAYWVLMZBMZDJKYZBKYT';
  private authToken: string = 'YzhjYmE4MGYzZDhmN2JjNTMyMmE1OTFlZWE2MWM3';

  public src: string = '';
  public dst: string = '';
  public text: string = '';
  public messageSent: string = '';
  public errorMessage: string = '';
  public baseUrl: string = 'https://api.plivo.com/v1/Account/';
  constructor(private http: HttpClient) { }

  sendSMS() {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.authId}:${this.authToken}`)}`,
      'Content-Type': 'application/json',
    });
    const body = {
      src: this.src,
      dst: this.dst,
      text: this.text,
    };
    const options = { headers: headers };

    this.http
      .post(this.baseUrl + this.authId + '/messages', body, options)
      .pipe(
        catchError((err) => {
          this.errorMessage = `Error sending message: ${err.message}`;
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          this.messageSent = 'Message sent successfully!';
        }
      });
  }
}
