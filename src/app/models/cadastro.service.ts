import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  user: Usuario[];
  constructor() {
    this.user = [];
  }

  listarUsuario(): Usuario[]{
    return this.user;
  }

  adicionarUsuario(usuario: Usuario): void {
    this.user.push(usuario);
  }
}
