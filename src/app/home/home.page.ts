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
  buttons = ['ac', '()', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '⌫'];

  buttonClick(button: string) {
    // Concatena o valor do botão ao valor exibido no display
    document.getElementById('displayValue')!.innerHTML += button;
  }

  clearDisplay() {
    // Limpa o valor exibido no display
    document.getElementById('displayValue')!.innerHTML = "";
  }
  back() {
    const element = document.getElementById('displayValue');
    if (element) {
      const res = element.textContent!;
      element.textContent = res.slice(0, -1);
    }
  }

  calculateResult() {
    let res = document.getElementById('displayValue')!.innerHTML;
    if (res) {
      document.getElementById('displayValue')!.innerHTML = eval(res);
    }
  }
}
