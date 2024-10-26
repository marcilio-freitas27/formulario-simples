import {Location} from '@angular/common';
import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {Novousuario} from '../models/novousuario';
import {Usuario} from '../models/usuario';
import {CadastroService} from '../service/cadastro.service';
import {UsuarioService} from '../service/usuario.service';

@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css']
})
export class EditaUsuarioComponent implements OnInit {

  formGroup: FormGroup;
  usuario: Novousuario;
  count: number;
  faList = faList
  constructor(
    private cadastroService: CadastroService,
    formBuilder: FormBuilder,
    private locate: Location,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
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
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.buscarUsuarioPorCodigo();
  }

  buscarUsuarioPorCodigo(){
    const id = this.route.snapshot.paramMap.get("id");
    const usuario = this.cadastroService.listarUsuarioPorCodigo(Number(id) - 1);
    this.formGroup.patchValue({
        nome: usuario.nome,
        fone: usuario.telefone
      }
    )
  }

  cancelar(){
    this.router.navigate(["/"]);
  }

  atualizar(nome: string, numero: string) {
    const id = this.route.snapshot.paramMap.get("id");
    const usuario = new Usuario(nome, numero);
    this.cadastroService.atualizarUsuario(usuario, Number(id) - 1);
    this.formGroup.reset();
  }

  get nome() {
    return this.formGroup.get('nome');
  }

  get fone() {
    return this.formGroup.get('fone');
  }

}
