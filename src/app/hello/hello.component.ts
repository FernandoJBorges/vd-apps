import { Component } from '@angular/core';

@Component({
        selector:'hello', 
        templateUrl:'./hello.component.html'
    })
export class HelloComponent {
    nome:string;
    clientes:Cliente[];

    constructor(){
        this.nome = 'Fernando João Borges';
        let marco = new Cliente('Marco Veio',1);
        let buda = new Cliente('Buda Abua',2);
        this.clientes=[marco,buda];
    }
   
}


class Cliente {
    constructor(
        public nome:string,
        public idade:number
    ){}
}
  