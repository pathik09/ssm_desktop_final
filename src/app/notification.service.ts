import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient,
  ) { }


  sendNotification(content, playerID) {
    console.log(content);

    var header = new HttpHeaders();
    header.append("Content-Type", "application/json");


    return this.http
      .post(
        "https://exportportal.site/ssmpushes.php",
        {
          message: content,
          playerID: playerID,
        },
        { headers: header, responseType: "text" }
      )
      .subscribe(
        (resp) => {
          console.log(resp);

        },
        (error) => { }
      );

  }

}
