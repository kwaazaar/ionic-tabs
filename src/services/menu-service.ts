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
        menu.name = 'Mijn Dienst';
        menu.icon = 'person';
        menu.items = [];
        this.currentMenu.push(menu);

        // * Hastus
        let menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.icon = 'calendar';
        menuitem.authenticated = true;
        menuitem.name = 'Mijn Planning';
        menuitem.url = 'https://planning.qbuzz.nl/MijnPlanning';
        menu.items.push(menuitem);

        // * Afas
        menuitem = new MenuItem();
        menuitem.name = 'Afas Pocket App';
        menuitem.icon = 'book';
        menuitem.authenticated = true;
        menuitem.type = 'app';
        menuitem.package = "nl.afas.pocket2"; // Gebruik "Apk Analyzer" van Martin Styk voor achterhalen van deze info
        menuitem.class = "nl.afas.pocket2.MainActivity";
        menu.items.push(menuitem);

        // Links
        menu = new Menu();
        menu.name = 'Reisinfo';
        menu.icon = 'bus'; // contacts, locate, map, people, search
        menu.items = [];
        this.currentMenu.push(menu);

        // * OVInfo
        menuitem = new MenuItem();
        menuitem.name = 'OVInfo';
        menuitem.icon = 'bus';
        menuitem.type = 'app';
        menuitem.package = 'nl.skywave.ovinfo';
        menuitem.class = 'nl.ovapi.ovinfo.MainActivity';
        menu.items.push(menuitem);

        // * Google Maps
        menuitem = new MenuItem();
        menuitem.name = 'Google Maps';
        menuitem.icon = 'map';
        menuitem.type = 'link';
        menuitem.url = 'https://www.google.com/maps'; // Start automatisch Maps-app indien geinstalleerd
        menu.items.push(menuitem);

        // * Qbuzz.nl
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Qbuzz website';
        menuitem.image = 'https://www.qbuzz.nl/icons/CORPORATE/favicon.ico';
        menuitem.url = 'https://www.qbuzz.nl';
        menu.items.push(menuitem);

        // * GD-site
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Groningen/Drenthe';
        menuitem.image = 'https://www.qbuzz.nl/icons/CORPORATE/favicon.ico';
        menuitem.url = 'https://www.qbuzz.nl/GD/';
        menu.items.push(menuitem);

        // * UOV-site
        menuitem = new MenuItem();
        menuitem.image = 'https://www.u-ov.info/icons/U_OV/favicon.ico';
        menuitem.type = 'link';
        menuitem.name = 'Utrecht (U-OV)';
        menuitem.url = 'https://www.u-ov.info/';
        menu.items.push(menuitem);

        // * DMG-site
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Drechtsteden, Molenlanden, ... (DMG)';
        menuitem.image = 'https://www.qbuzz.nl/icons/CORPORATE/favicon.ico';
        menuitem.url = 'https://www.qbuzz.nl/dmg/';
        menu.items.push(menuitem);


        // e-Learning
        menu = new Menu();
        menu.name = 'e-Learning';
        menu.icon = 'school';
        menu.items = [];
        this.currentMenu.push(menu);

        // * Bussen van de toekomst
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Bussen van de toekomst';
        menuitem.image = 'https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png';
        menuitem.url = 'https://youtu.be/wfzTdo1Vs78';
        menu.items.push(menuitem);

        // * De stem van Qbuzz
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'De stem van Qbuzz';
        menuitem.image = 'https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png';
        menuitem.url = 'https://youtu.be/I4vhmlwmtfk';
        menu.items.push(menuitem);

        // * Dubbeldekker
        menuitem = new MenuItem();
        menuitem.type = 'link';
        menuitem.name = 'Dubbeldekker';
        menuitem.image = 'https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png';
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
  