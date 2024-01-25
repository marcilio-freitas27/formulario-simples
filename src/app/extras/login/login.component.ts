import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {

  }

  login(user: any, pass: any){
    if(user === 'Marcilio' && pass !== ""){
      let estaLogado = {nome: user, senha: pass};
      localStorage.setItem('formularioSimplesAutenticacao', JSON.stringify(estaLogado));
      this.router.navigate(['']);
    }
  }

}
