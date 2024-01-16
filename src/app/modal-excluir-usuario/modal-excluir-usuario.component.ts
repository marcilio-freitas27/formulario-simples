import { Component, Input, OnInit } from '@angular/core';
import { CadastroService } from '../models/cadastro.service';

@Component({
  selector: 'app-modal-excluir-usuario',
  templateUrl: './modal-excluir-usuario.component.html',
  styleUrls: ['./modal-excluir-usuario.component.css']
})
export class ModalExcluirUsuarioComponent implements OnInit {

  @Input() modal: any;
  @Input() id: any;
  @Input() excluirUsuario!:number;
  constructor(private cadastroService: CadastroService,) { }

  ngOnInit(): void {
  }

  excluir() {
    this.cadastroService.excluirUsuario(this.excluirUsuario);
    this.closeModal()
  }

  closeModal() {
    this.modal = 'modal-open';
    let myModal: any = document.querySelector('#exampleModalFade');
    myModal.style.opacity = 1;
    myModal.style.backgroundColor = 'white';
    this.modal = 'modal';
  }


}
