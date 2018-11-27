import { Component, OnInit } from '@angular/core';

import { AccountPage } from '../account/account';
import { MenuService } from '../../services/menu-service';
import { MenuPage } from '../menupage/menupage';
import { Menu } from '../../services/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  currentMenus: Menu[];
  
  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.getMenus();
  }  

  getMenus(): void {
    this.currentMenus = this.menuService.getMenus();
    this.currentMenus.forEach(element => {
      // init tab
    });
  }

  tabChanged($event) {
    console.log('tabChanged', $event);
  }

  accountTab = AccountPage;
  tabs = [ MenuPage, MenuPage, MenuPage, MenuPage, MenuPage, MenuPage, MenuPage, MenuPage ];
}
