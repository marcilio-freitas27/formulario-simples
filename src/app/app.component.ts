import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'formulario-simples';
  usuario: any;
  constructor(private primengConfig: PrimeNGConfig) {
    this.usuario = localStorage.getItem('formularioSimplesAutenticacao');
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
