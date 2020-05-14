import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment,{static: true}) segment:IonSegment;

  superHeroes: Observable<any>;
  constructor(private dataService: DataService) { }
  publisher = '';

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(event){   
    //const valorSegmento = event.detail.value;
    const valorSegmento = event.target.value;
    console.log(valorSegmento);    
    
    if(valorSegmento === 'todos'){
      this.publisher = '';
      return;
    }

    this.publisher = valorSegmento;

  }

}
