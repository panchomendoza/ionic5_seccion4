import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log(evento.day.value);
          let hola = evento.year.value+"-"+evento.month.value+"-"+evento.day.value;
          console.log(hola);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
    

  }

  // Para usar fechas se recomienda usar moment.js

  cambioFecha(event){
    console.log('ionchange ',event);
    console.log('Date ', new Date(event.detail.value));
  }

}
