import { Component } from '@angular/core';
import { NavController, NavParams, Menu } from 'ionic-angular';

import { WebIntent } from '@ionic-native/web-intent';
import { MenuItem } from '../../services/menu-item';

@Component({
  selector: 'menupage',
  templateUrl: 'menupage.html'
})
export class MenuPage {

  private currentMenu: Menu;

  constructor(public navCtrl: NavController, navParams: NavParams, private webIntent: WebIntent) {
    this.currentMenu = navParams.data as Menu;
  }

  private InvokeMenuItem(item: MenuItem): void {
    if (item.type === 'app') {
      this.InvokeApp(item.package, item.class);
    } else if (item.type == 'link') {
      this.InvokeLink(item.url);
    } else {
      console.error('Unsupported menuitem', item);
    }
  }

  private InvokeApp(packageName: string, className: string): void {
    console.log('InvokeIntent');

    const options = {
      component:
      {
        "package": packageName,
        "class": className
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

  private InvokeLink(url: string): void {
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
