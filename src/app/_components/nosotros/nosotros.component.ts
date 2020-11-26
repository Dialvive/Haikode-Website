import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
  providers: [NgbCarouselConfig]
})
export class NosotrosComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators =false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = true;
  }
  ngOnInit(): void {
  }

}
