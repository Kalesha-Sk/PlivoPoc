import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-conference-xml',
  templateUrl: './conference-xml.component.html',
  styleUrls: ['./conference-xml.component.scss'],
})
export class ConferenceXMLComponent {
  // private authId: string = 'MAYWVLMZBMZDJKYZBKYT';
  private authId: string = 'MAYTDLYMRHZJGZNTG5NJ';
  // private authToken: string = 'YzhjYmE4MGYzZDhmN2JjNTMyMmE1OTFlZWE2MWM3';
  private authToken: string = 'NTY2MDhlYmIwMGRlOTlkMTE2ZGE3MDdjODU3NmU4';

  public from: string = '';
  public to: string = '';
  public callInProgress: boolean = false;
  public callComplete: boolean = false;
  public errorMessage: string = '';
  public baseUrl: string = 'https://api.plivo.com/v1/Account/';
  public call_uuid: string = '';

  constructor(private http: HttpClient) {}

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
      answer_url: 'https://0242-183-82-122-219.ngrok-free.app/dial',
      answer_method: 'GET',
      hangup_url: 'https://s3.amazonaws.com/plivosamplexml/hangup_url.xml',
      hangup_method: 'GET',
      fallback_url: 'https://s3.amazonaws.com/plivosamplexml/fallback_url.xml',
      fallback_method: 'GET',
    };

    this.http
      .post('https://0242-183-82-122-219.ngrok-free.app/dial', options)
      .pipe(
        catchError((err) => {
          this.errorMessage = `Error making call: ${err.message}`;
          this.callInProgress = false;
          return of(null);
        })
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );

    // .subscribe((response: any) => {
    //   this.call_uuid = response.request_uuid;
    //   if (response) {
    //     this.http
    //       .post(
    //         'https://api.plivo.com/v1/Account/MANZNJNZRHMGQZZJKZOD/Call/' +
    //           this.call_uuid +
    //           '/Record',
    //         {
    //           time_limit: '60',
    //           file_format: 'mp3',
    //           transcription_type: 'auto',
    //           transcription_url: 'https://transcription.url',
    //           transcription_method: 'POST',
    //           callback_url:
    //             'https://s3.amazonaws.com/plivosamplexml/callback_url.xml',
    //           callback_method: 'POST',
    //         },
    //         options
    //       )
    //     this.callComplete = true;
    //   }
    // });

    this.http.get('https://0242-183-82-122-219.ngrok-free.app/dial').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );

    // this.http
    //   .get('https://s3.amazonaws.com/plivosamplexml/callback_url.xml')
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );

    // this.http
    //   .get('https://s3.amazonaws.com/plivosamplexml/hangup_url.xml')
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );

    // this.http
    //   .get('https://s3.amazonaws.com/plivosamplexml/fallback_url.xml')
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
  }
}
