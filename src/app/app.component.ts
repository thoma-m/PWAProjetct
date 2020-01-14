import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';
  version = 'Angular version 8.2.14';

  constructor(swPush: SwPush) {
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: 'BKO7ReRrYFbM3uGYiIPdqXdzSzqQfdbBdrG3jJdyWB_hg2j7tlR9cjWBa3yDc1X74SSO4SHHY0GdoOtHOB7DoT0',
        })
        .then(subscription => {
          console.log(subscription);
          // send subscription to the server
        })
        .catch(console.error)
    }
  
  }
}
