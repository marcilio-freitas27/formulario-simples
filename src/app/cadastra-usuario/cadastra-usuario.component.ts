import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../models/cadastro.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  constructor(private cadastroService: CadastroService) {
  }

  ngOnInit(): void {
  }

  adicionar(nome:string, numero:string): void {
    const usuario = new Usuario(nome, numero);
    this.cadastroService.adicionarUsuario(usuario);
    console.log(this.cadastroService.listarUsuario());
  }

}
