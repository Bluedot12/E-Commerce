import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  images = ['../../../assets/slide1.png', '../../../assets/slide2.jpg', '../../../assets/slide3.jpg',
    '../../../assets/slide4.webp','../../../assets/slide5.webp','../../../assets/slide6.webp'];

  cards = [
    {
      quote:"“Time is that which is manufactured by clocks.”"
    },
    {
      quote:"You can’t turn back the clock. But you can wind it up again."
    },
    {
      quote:"Don’t watch the clock; do what it does. Keep going."
    }
  ];
}
