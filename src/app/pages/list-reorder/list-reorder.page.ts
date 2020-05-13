import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Spiderman', 'Batman', 'Flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event){
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  modificarArreglo(){
    console.log(this.personajes);
  }

}
