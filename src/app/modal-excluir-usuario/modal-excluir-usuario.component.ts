import { Component, Input, OnInit } from '@angular/core';
import { CadastroService } from '../service/cadastro.service';
import { ModalService } from '../service/modal.service';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-excluir-usuario',
  templateUrl: './modal-excluir-usuario.component.html',
  styleUrls: ['./modal-excluir-usuario.component.css']
})
export class ModalExcluirUsuarioComponent implements OnInit {

  @Input() id: any;
  @Input() excluirUsuario!:number;
  faWarning = faWarning;
  constructor(
    private cadastroService: CadastroService,
    private modalService: ModalService
    ) { }

  ngOnInit(): void {
    this.modalService.getModal(this.id);
  }

  excluir() {
    this.cadastroService.excluirUsuario(this.excluirUsuario);
    this.closeModal();
  }

  closeModal() {
    let myModal: any = document.querySelector('#exampleModalFade');
    myModal.style.opacity = 1;
    myModal.style.backgroundColor = 'white';
    this.modalService.setModal(this.id, 'none');
  }


}
