import { Injectable } from "@angular/core";
import { Menu } from "./menu";
import { MenuItem } from "./menu-item";

@Injectable()
export class MenuService {
    private currentMenu: Menu[];

    constructor() {
        this.currentMenu = [];

        // Apps
        let menu = new Menu();
        menu.name = 'Apps';
        menu.icon = 'bus';
        menu.items = [];
        this.currentMenu.push(menu);

        // * Afas
        let menuitem = new MenuItem();
        menuitem.name = 'Afas Pocket App',
        menuitem.type = 'app';
        menuitem.package = "nl.afas.pocket2";
        menuitem.class = "nl.afas.pocket2.MainActivity";
        menu.items.push(menuitem);

        // * Hastus
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Hastus SelfService';
        menuitem.url = 'https://selfservice.wienerlinien.at/SelfServiceCorp/'; // Verkeerde url
        menu.items.push(menuitem);

        // Links
        menu = new Menu();
        menu.name = 'Links';
        menu.icon = 'bookmark';
        menu.items = [];
        this.currentMenu.push(menu);

        // * Qbuzz.nl
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Qbuzz website';
        menuitem.url = 'https://www.qbuzz.nl';
        menu.items.push(menuitem);

        // * GD-site
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Groningen/Drenthe';
        menuitem.url = 'https://www.qbuzz.nl/GD/';
        menu.items.push(menuitem);

        // * UOV-site
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Utrecht (U-OV)';
        menuitem.url = 'https://www.u-ov.info/';
        menu.items.push(menuitem);

        // * DMG-site
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Drechtsteden, Molenlanden, ... (DMG)';
        menuitem.url = 'https://www.qbuzz.nl/dmg/';
        menu.items.push(menuitem);


        // Videos
        menu = new Menu();
        menu.name = 'Videos';
        menu.icon = 'logo-youtube';
        menu.items = [];
        this.currentMenu.push(menu);

        // * Bussen van de toekomst
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Bussen van de toekomst';
        menuitem.url = 'https://youtu.be/wfzTdo1Vs78';
        menu.items.push(menuitem);

        // * De stem van Qbuzz
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'De stem van Qbuzz';
        menuitem.url = 'https://youtu.be/I4vhmlwmtfk';
        menu.items.push(menuitem);

        // * Dubbeldekker
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Dubbeldekker';
        menuitem.url = 'https://youtu.be/-I4_0wb12Oc';
        menu.items.push(menuitem);


        for (let index = 0; index < this.currentMenu.length; index++) {
            this.currentMenu[index].index = index; // Force
        }
    }

    getMenus(): Menu[] {
        return this.currentMenu;
    }
  }
  