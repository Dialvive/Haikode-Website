import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [NgbCarouselConfig]
})
export class IndexComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
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

