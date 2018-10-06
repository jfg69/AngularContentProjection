import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [{
    description: 'Chewbacca',
    longDescription: 'Chewbacca est un personnage de Star Wars. Légendaire guerrier Wookiee aux côtés du légendaire contrebandier Han Solo',
    image: '../../assets/pic1.jpg',
  }];
}
