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
  private authId: string = '';
  private authToken: string = '';

  public from: string = '';
  public to: string = '';
  public callInProgress: boolean = false;
  public callComplete: boolean = false;
  public errorMessage: string = '';

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

    this.http.post('', body, options)
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
