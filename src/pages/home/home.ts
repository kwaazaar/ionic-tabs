import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WebIntent } from '@ionic-native/web-intent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private webIntent: WebIntent) {

  }

  InvokeIntent(): void {
    console.log('InvokeIntent');

    const options = {
      component:
      {
        "package": "nl.afas.pocket2",
        "class": "nl.afas.pocket2.MainActivity"
      },
      // extras:
      // {
      //   'random.number': Math.floor((Math.random() * 1000) + 1)
      // }
    };

    this.webIntent.startActivity(options).then(() => {
      console.info('Successfully started webIntent');
    }, (err) => {
      console.error('Failed to start webIntent', err);
    });
  }

  InvokeLink(url: string): void {
    console.log('InvokeLink:', url);
    const options = {
      action: this.webIntent.ACTION_VIEW,
      url,
      //type: 'application/vnd.android.package-archive'
    };

    this.webIntent.startActivity(options).then(() => {
      console.info('Successfully started webIntent');
    }, (err) => {
      console.error('Failed to start webIntent', err);
    });
  }
}
