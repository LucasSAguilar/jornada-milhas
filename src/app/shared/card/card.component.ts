import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // a tag "variant" só pode receber "primary" ou "secondary", caso não receba nenhum, sera primary"
  @Input() variant: "primary" | "secondary" = "primary"
}
