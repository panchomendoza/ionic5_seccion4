import { Component, OnInit, Input } from '@angular/core';
import { InicioPage } from 'src/app/pages/inicio/inicio.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
