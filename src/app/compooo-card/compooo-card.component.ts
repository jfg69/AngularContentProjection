import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compooo-card',
  templateUrl: './compooo-card.component.html',
  styleUrls: ['./compooo-card.component.css']
})
export class CompoooCardComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
