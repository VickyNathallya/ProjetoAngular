import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule]
})

export class HomePage {
  
  // Variável para armazenar o valor exibido no display
  displayValue = '';
  // Array com os botões da calculadora
  buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', 'X', '/', '⌫', '=', '%', '( )', 'ac'];

  buttonClick(button: string) {
    // Concatena o valor do botão ao valor exibido no display
    this.displayValue += button;
  }

  clearDisplay() {
    // Limpa o valor exibido no display
    this.displayValue = '';
  }

  calculateResult() {
    try {
      // Calcula o resultado da expressão e atualiza o valor exibido no display
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      // Em caso de erro na expressão, exibe "Error" no display
      this.displayValue = 'Error';
    }
  }
}
