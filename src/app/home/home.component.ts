import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Car } from '../model/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component2.css','./home.component3.css']
})
export class HomeComponent {
 images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}

	car: Car = new Car("farmacia2", "assets/image/farma3.jpg", true);
	car2: Car = new Car("farmacia3", "assets/image/farma4.jpg", true);

}
