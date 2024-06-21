import { Component } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {
  images = ['../../../assets/slide1.png', '../../../assets/slide2.jpg', '../../../assets/slide3.jpg',
    '../../../assets/slide4.webp','../../../assets/slide5.webp','../../../assets/slide6.webp'];

  cards = [
    {
      quote:"“We are hardly ever grateful for a fine clock or watch when it goes right, and we pay attention to it only when it falters, for then we are caught by surprise. It ought to be the other way about.”"
    },
    {
      quote:"“The half minute which we daily devote to the winding-up of our watches is an exertion of labor almost insensible; yet, by the aid of a few wheels, its effect is spread over the whole twenty-four hours.”"
    },
    {
      quote:"“Don’t watch the clock; do what it does. Keep going.There was never a time when the world began because it goes round and round like a circle, and there is no place on a circle where it begins. Look at my watch, which tells the time; it goes round, and so the world repeats itself again and again.”"
    }
  ];
}
