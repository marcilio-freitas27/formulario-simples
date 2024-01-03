import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../models/cadastro.service';
import { Usuario } from '../models/usuario';
@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css'],
})
export class CadastraUsuarioComponent implements OnInit {
  formGroup: FormGroup;
  usuario: Usuario;
  lista: any[];
  duplicado: any;
  constructor(
    private cadastroService: CadastroService,
    private formBuilder: FormBuilder
  ) {
    this.usuario = new Usuario('', '');
    this.lista = this.cadastroService.listarUsuario();
    this.duplicado = this.lista.length;
    this.formGroup = this.formBuilder.group({
      nome: [
        this.usuario.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      fone: [
        this.usuario.telefone,
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(11),
          Validators.pattern('[0-9]{11}$'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  adicionar(nome: string, numero: string): void {
    const usuario = new Usuario(nome, numero);
    this.cadastroService.adicionarUsuario(usuario);
    this.formGroup.reset();
  }

  get nome() {
    return this.formGroup.get('nome');
  }

  get fone() {
    return this.formGroup.get('fone');
  }
}
