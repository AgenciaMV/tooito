import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public titulo: String = 'Contador App';
  numero: number = 0;
  cantidad = 2;

  mas = () => {
    this.numero = this.numero + this.cantidad;
  };

  menos = () => {
    this.numero = this.numero - this.cantidad;
  };
}
