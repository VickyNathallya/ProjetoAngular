import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {

    resultado: number = 0; 

    buttonClick(numero: number)
    { 
      if(this.resultado == 0){
        document.getElementById('resultado')!.innerHTML = "";
      }
      let res = document.getElementById('resultado')!.innerHTML;       
      document.getElementById('resultado')!.innerHTML += numero;
     this.resultado = numero * 1;
     } 

    //  operações
     buttonClickop(op: string){ 
      if(this.resultado == 0){
        document.getElementById('resultado')!.innerHTML = "";
      }
      let res = document.getElementById('resultado')!.innerHTML; 
      document.getElementById('resultado')!.innerHTML += op; 
    } 

    // limpa display
    clear(){ 
      document.getElementById('resultado')!.innerHTML = "";
   } 

  //  para numeros negativos
    back(): void {
       let res = document.getElementById('resultado')!.innerHTML;
        document.getElementById('resultado')!.innerHTML = res.substring(0, res.length - 1); 
      } 
      // função para calculo
      calcular() {
        let res = document.getElementById('resultado')!.innerHTML;
        if (res) {
          let result = eval(res);
          if (typeof result === 'number') {
            this.resultado = result;
            document.getElementById('resultado')!.innerHTML = result.toString();
          }
        }
      }
      
  }