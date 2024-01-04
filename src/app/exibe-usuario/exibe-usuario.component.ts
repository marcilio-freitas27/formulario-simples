import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../models/cadastro.service';
import { Novousuario } from '../models/novousuario';
import { Usuario } from '../models/usuario';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exibe-usuario',
  templateUrl: './exibe-usuario.component.html',
  styleUrls: ['./exibe-usuario.component.css'],
})
export class ExibeUsuarioComponent implements OnInit {
  formGroup: FormGroup;
  lista: Usuario[];
  usuario: Novousuario;
  novo: Novousuario[];
  count: number;
  show: boolean;
  faPlus = faPlus;
  constructor(
    private cadastroService: CadastroService,
    formBuilder: FormBuilder
  ) {
    this.lista = [];
    this.novo = [];
    this.count = 0;
    this.show = true;
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
    this.lista = this.cadastroService.listarUsuario();
    this.novo = this.cadastroService.listarNovo();
    // retorna dados do usuario quando precisamos editar um campo

    // this.formGroup.patchValue({
    //   nome: this.lista[0]['nome'],
    //   fone: this.lista[0]['telefone']
    // })
  }

  excluir(count: number) {
    this.cadastroService.excluirUsuario(count);
  }

  editar(nome: string, numero: string, index: number) {
    const usuario = new Novousuario(nome, numero);
    this.cadastroService.editarUsuario(usuario, index);
    this.count = index;
    this.show = false;
  }

  atualizar(nome: string, numero: string, id: number) {
    const usuario = new Usuario(nome, numero);
    this.cadastroService.atualizarUsuario(usuario, id);
    this.formGroup.reset();
    this.show = true;
  }

  get nome() {
    return this.formGroup.get('nome');
  }

  get fone() {
    return this.formGroup.get('fone');
  }

  modal = 'modal';
  name = 'Angular';

  openModal(inp: string) {
    console.log(inp);
    this.modal = 'modal-open';
  }
  closeModal() {
    this.modal = 'modal';
  }
}
