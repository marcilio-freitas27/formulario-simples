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
    if(user === 'Marcilio'){
      console.log(user, pass)
      localStorage.setItem('formularioSimplesAutenticacao', user);
      this.router.navigate(['']);
    }
  }

}
