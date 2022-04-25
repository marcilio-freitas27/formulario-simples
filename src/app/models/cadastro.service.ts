import { Injectable } from '@angular/core';
import { Novousuario } from './novousuario';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  user: Usuario[];
  new: Novousuario[];
  constructor() {
    this.user = [];
    this.new = [];
  }

  listarUsuario(): Usuario[]{
    return this.user;
  }

  listarNovo(): Novousuario[]{
    return this.new;
  }

  usuarioExiste(usuario: Usuario):boolean{
    if(this.user.find((dado) => dado.telefone == usuario.telefone)){
      return true;
    }
    return false;
  }

  estaVazio(usuario: Usuario): boolean{
    let dados = Object.values(usuario);
    for (let i = 0; i < dados.length; i++) {
      if (dados[i][i] == " ") {
        return true;
      }
    }
    return false;
  }

  adicionarUsuario(usuario: Usuario){
    if(!this.estaVazio(usuario) && !this.usuarioExiste(usuario)){
      this.user.push(usuario);
    }
  }

  excluirUsuario(index:number){
    if(index != null){
      this.user.splice(index, 1);
      this.new.splice(index, 1);
      if(this.user.length == 0){
        this.new.length == 0
      }
    }
  }

  editarUsuario(novo: Novousuario,index:number){
    this.new.push(novo);
    index = this.new.indexOf(novo);
  }

  atualizarUsuario(usuario:Usuario,id:number){
    this.user[id].nome = usuario.nome;
    this.user[id].telefone = usuario.telefone;
    this.new.splice(id, 1);
  }
}
