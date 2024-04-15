import { Component } from '@angular/core';
import { Sumadora } from '../clases/sumadora';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  sumadora:Sumadora;
  /**
   *
   */
  constructor() {
    this.sumadora = new Sumadora();

}
}
