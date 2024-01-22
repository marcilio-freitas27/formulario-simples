import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nao-encontrada',
  templateUrl: './nao-encontrada.component.html',
  styleUrls: ['./nao-encontrada.component.css']
})
export class NaoEncontradaComponent implements OnInit {

  faList = faList;
  constructor() { }

  ngOnInit(): void {
  }


  alterarOlhos(){
    let olhos: any = document.querySelector('.iris-direita');
    olhos.style.left = '100px';
  }

  alterarolhosSaida(){
    let olhos: any = document.querySelector('.iris-direita');
    olhos.style.left = '0';
  }
}
