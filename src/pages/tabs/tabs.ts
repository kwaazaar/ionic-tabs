import { Component, OnInit } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MenuService } from '../../services/menu-service';
import { MenuPage } from '../menupage/menupage';
import { Menu } from '../../services/menu';
import { Type } from '@angular/compiler/src/core';

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

  tabs = [ MenuPage, MenuPage, MenuPage, MenuPage, MenuPage, MenuPage, MenuPage, MenuPage ];
}
