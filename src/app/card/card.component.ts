import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() email: string;
  @Input() first_name: string;
  @Input() last_name: number;
  constructor() { }

  ngOnInit() {
  }

}