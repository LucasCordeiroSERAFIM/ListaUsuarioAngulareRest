import { Component } from '@angular/core';

import { PoMenuItem, PoNavbarIconAction } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [*barra superior de menu]
  readonly navActions: Array<PoNavbarIconAction> = [
    { icon: 'po-icon po-icon-home', label: 'Home', link: '/', tooltip: "Home" },
    { icon: 'po-icon po-icon-sale', label: 'Exemplo Formulário', link: '/formulario', tooltip: "Formulário" },
    { icon: 'po-icon po-icon-align-justify', label: 'Exemplo Grid', link: '/grid', tooltip: "Grid" },
  ];

  // [*barra lateral de menu]
  readonly menus: Array<PoMenuItem> = [
    { icon: 'po-icon po-icon-home', label: 'Home', link: '/' },
    { icon: 'po-icon po-icon-sale', label: 'Exemplo Formulário', link: '/formulario' },
    { icon: 'po-icon po-icon-align-justify', label: 'Exemplo Grid', link: '/grid'},
  ];

}
