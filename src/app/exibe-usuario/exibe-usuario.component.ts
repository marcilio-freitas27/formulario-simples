import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../models/cadastro.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-exibe-usuario',
  templateUrl: './exibe-usuario.component.html',
  styleUrls: ['./exibe-usuario.component.css']
})
export class ExibeUsuarioComponent implements OnInit {

  lista: Usuario[];
  constructor(private cadastroService: CadastroService) {
    this.lista = [];
   }

  ngOnInit(): void {
    this.lista = this.cadastroService.listarUsuario();
  }

}
