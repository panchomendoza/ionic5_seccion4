import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Shett',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-google-playstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'image-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Botones',
      redirectTo: '/botones'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}