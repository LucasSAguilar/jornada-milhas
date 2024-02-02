import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  /*  
      O elemento @Input() deixa claro que é um valor de entrada, ou seja
      quando eu ir instanciar esse componente posso inserir os dados nesses atributos
  */
 
  @Input() src: string = ''
  @Input() alt: string = ''

}
