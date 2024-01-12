import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../models/cadastro.service';
import { Usuario } from '../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Novousuario } from '../models/novousuario';
import { Location } from '@angular/common';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css']
})
export class EditaUsuarioComponent implements OnInit {

  formGroup: FormGroup;
  usuario: Novousuario;
  count: number;
  faPlus = faPlus
  constructor(
    private cadastroService: CadastroService,
    formBuilder: FormBuilder,
    private locate: Location,
    private route: ActivatedRoute,
    ) {
    this.count = 0;
    this.usuario = new Novousuario('', '');
    this.formGroup = formBuilder.group({
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
          // Validators.pattern(/^\(\d{2}\) \d \d{4}-\d{4}$/),
        ],
      ],
    });
  }

  ngOnInit(): void {
  }

  cancelar(){
    this.locate.back();
  }

  atualizar(nome: string, numero: string) {
    const id = this.route.snapshot.paramMap.get("id");
    const usuario = new Usuario(nome, numero);
    this.cadastroService.atualizarUsuario(usuario, Number(id));
    this.formGroup.reset();
  }

  get nome() {
    return this.formGroup.get('nome');
  }

  get fone() {
    return this.formGroup.get('fone');
  }

}
