import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
      @Input() price:string="0";
      @Input() title:string="0";
      @Input() li1:string="";
      @Input() li2:string="";
      @Input() li3:string="";
      @Input() li4:string="";
      @Input() btnTitle:string="";
      @Input() btnClass:string="bg-primary";
}
