import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../models/cadastro.service';

@Component({
  selector: 'app-modal-excluir-usuario',
  templateUrl: './modal-excluir-usuario.component.html',
  styleUrls: ['./modal-excluir-usuario.component.css']
})
export class ModalExcluirUsuarioComponent implements OnInit {

  modal = 'modal';
  excluirUsuario:number = -1;
  constructor(private cadastroService: CadastroService,) { }

  ngOnInit(): void {
  }

  excluir() {
    this.cadastroService.excluirUsuario(this.excluirUsuario);
    this.closeModal()
  }

  openModal(count: number) {
    this.excluirUsuario = count;
    let myModal: any = document.querySelector('body');
    let myInput: any = document.getElementById('exampleModal');

    myModal.style.opacity = 0.5;
    myModal.style.zIndex = -1;
    myModal.style.backgroundColor = 'rgba(0,0,0,0.2)';
    myInput.style.zIndex = 1072;
    this.modal = 'modal-open';
  }

  closeModal() {
    let myModal: any = document.querySelector('body');
    myModal.style.opacity = 1;
    myModal.style.backgroundColor = 'white';
    this.modal = 'modal';
  }


}
