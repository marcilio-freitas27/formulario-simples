import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../models/cadastro.service';
import { Novousuario } from '../models/novousuario';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-exibe-usuario',
  templateUrl: './exibe-usuario.component.html',
  styleUrls: ['./exibe-usuario.component.css']
})
export class ExibeUsuarioComponent implements OnInit {

  lista: Usuario[];
  novo: Novousuario[];
  count: number;
  show: boolean;
  constructor(private cadastroService: CadastroService) {
    this.lista = [];
    this.novo = [];
    this.count = 0;
    this.show = true;
   }

  ngOnInit(): void {
    this.lista = this.cadastroService.listarUsuario();
    this.novo = this.cadastroService.listarNovo();
  }

  excluir(count:number){
    this.cadastroService.excluirUsuario(count);
  }

  editar(nome:string, numero:string,index:number){
    const usuario = new Novousuario(nome, numero);
    this.cadastroService.editarUsuario(usuario,index);
    this.count = index;
    this.show = false;
  }

  atualizar(nome:string, numero:string,id:number,form:HTMLFormElement){
    const usuario = new Usuario(nome, numero);
    this.cadastroService.atualizarUsuario(usuario,id);
    form.reset();
    this.show = true;
  }

}
