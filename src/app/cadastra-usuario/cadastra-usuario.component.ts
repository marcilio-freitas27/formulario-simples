import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../models/cadastro.service';
import { Usuario } from '../models/usuario';
@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  formGroup: FormGroup;
  usuario: Usuario;
  constructor(private cadastroService: CadastroService, private formBuilder: FormBuilder) {
    this.usuario = new Usuario('','');
    this.formGroup = this.formBuilder.group({
      nome : [this.usuario.nome,Validators.required],
      fone : [this.usuario.telefone,Validators.required],
    });

  }

  ngOnInit(): void {
  }

  adicionar(nome:string, numero:string): void {
    const usuario = new Usuario(nome, numero);
    this.cadastroService.adicionarUsuario(usuario);
    this.formGroup.reset();
  }

}
