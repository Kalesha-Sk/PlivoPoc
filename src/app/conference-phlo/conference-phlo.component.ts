import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-conference-phlo',
  templateUrl: './conference-phlo.component.html',
  styleUrls: ['./conference-phlo.component.scss']
})
export class ConferencePhloComponent {
  private authId: string = 'MAYWVLMZBMZDJKYZBKYT';
  private authToken: string = 'YzhjYmE4MGYzZDhmN2JjNTMyMmE1OTFlZWE2MWM3';

  public from: string = '';
  public to: string = '';
  public callInProgress: boolean = false;
  public callComplete: boolean = false;
  public errorMessage: string = '';
  public phloUrl: string = 'https://phlorunner.plivo.com/v1/account/MAYWVLMZBMZDJKYZBKYT/phlo/18486b62-367b-466d-8321-b19f0efffda6';

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
    };

    this.http.post(this.phloUrl, body, options)
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
  }

}
