import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nao-encontrada',
  templateUrl: './nao-encontrada.component.html',
  styleUrls: ['./nao-encontrada.component.css']
})
export class NaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  alterarOlhos(){
    let olho1: any = document.querySelector('.iris-esquerda');
    olho1.style.left = '100px';

    let olhos: any = document.querySelector('.iris-direita');
    olhos.style.left = '100px';
  }

  alterarolhosSaida(){
    let olho1: any = document.querySelector('.iris-esquerda');
    olho1.style.left = '0';

    let olhos: any = document.querySelector('.iris-direita');
    olhos.style.left = '0';
  }
}
