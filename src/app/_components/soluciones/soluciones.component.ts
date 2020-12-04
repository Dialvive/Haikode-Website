import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.css'],
  providers: [NgbCarouselConfig]
})
export class SolucionesComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators =true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.animation = true;
  }

  ngOnInit(): void {
  }

}
