import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../service/cadastro.service';
import { Novousuario } from '../models/novousuario';
import { Usuario } from '../models/usuario';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../service/modal.service';
import { UsuarioService } from '../service/usuario.service';
import { GeradorDocumentosUtil } from '../util/gerador-documentos.util';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-exibe-usuario',
  templateUrl: './exibe-usuario.component.html',
  styleUrls: ['./exibe-usuario.component.css'],
})
export class ExibeUsuarioComponent implements OnInit {

  formGroup: FormGroup;
  lista: Usuario[];
  usuario: Novousuario;
  users: any[];
  usuarioLogado: any;
  id:any = 'exampleModal';
  novo: Novousuario[];
  count: number;
  faPlus = faPlus;
  excluirUsuario:number = 0;
  value: any = '';
  table: any;
  tabela: any;
  constructor(
    private cadastroService: CadastroService,
    formBuilder: FormBuilder,
    private modalService: ModalService,
    private router: Router,
    private usuarioService: UsuarioService,
    public geradorUtil: GeradorDocumentosUtil
  ) {
    this.lista = [];
    this.novo = [];
    this.users = [];
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
    this.usuarioLogado = localStorage.getItem('formularioSimplesAutenticacao');
  }

  ngOnInit(): void {
    this.lista = this.cadastroService.listarUsuario();
    this.novo = this.cadastroService.listarNovo();
    this.modalService.getModal(this.id);

    // retorna dados do usuario quando precisamos editar um campo

    // this.formGroup.patchValue({
    //   nome: this.lista[0]['nome'],
    //   fone: this.lista[0]['telefone']
    // })
  }

  ngAfterViewInit() {
    this.tabela = new DataTable('#myTable');
    // let minhaLista:any[] = this.lista;
    // this.table = new DataTable('#myTable',{
    //     data: minhaLista,
    //     columns: [
    //       { title: 'Nome', data: 'nome' },
    //       { title: 'Telefone', data: 'telefone' },
    //     ]
    //   });
  }

  atualizar(nome: string, numero: string, id: number) {
    const usuario = new Usuario(nome, numero);
    this.cadastroService.atualizarUsuario(usuario, id);
    this.formGroup.reset();
  }

  buscarUsuarios(){
    this.usuarioService.getUserList().subscribe({
      next: dados => {
        this.users = dados
      },
      error: dados => {
        console.log(dados)
      }
    })
  }

  buscarUsuarioPorCodigo(codigo: number){
    this.usuarioService.getUserListById(codigo).subscribe({
      next: dados => {
        console.log('usuario', dados)
      }
    })
  }

  excluirUsuarioPorCodigo(){
    this.usuarioService.deleteUserById(2).subscribe(
      {
        next: () =>{
          console.log('O Usuário foi excluído.');
        }
      }
    );
  }

  alterarusuario(){
    this.usuarioService.updateUser(1, {id: 1, nome: 'Marcilio', telefone: '84991383819'}).subscribe({
      next: () =>{
        console.log('Alterado com sucesso')
      }
    })
  }

  salvarUsuario(){
    this.usuarioService.insertUser({nome: 'Marcilio', telefone: '84991383819'}).subscribe({
      next: () =>{
        console.log('Usuario salvo');
      }
    })
  }

  get nome() {
    return this.formGroup.get('nome');
  }

  get fone() {
    return this.formGroup.get('fone');
  }

  openModal(count: number) {
    this.excluirUsuario = count;
    let myModal: any = document.querySelector('#exampleModalFade');
    let myInput: any = document.getElementById(this.id);

    myModal.style.opacity = 0.5;
    myModal.style.zIndex = -1;
    myModal.style.backgroundColor = 'rgba(0,0,0,0.2)';
    myInput.style.zIndex = 1072;
    myModal.style.height = '100%';
    myInput.style.display = 'block';
    this.modalService.setModal(this.id, 'block');
  }

  buscar(resultado: any){
    this.value = resultado;
  }

  logout(){
    localStorage.removeItem('formularioSimplesAutenticacao');
    this.router.navigate(['login']);
  }

  gerarCsv(){
    this.geradorUtil.gerarCsv(this.lista);
  }

  gerarPdf(){
    this.geradorUtil.gerarPdf(this.lista);
  }

}
