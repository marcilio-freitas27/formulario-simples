import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  getModal(id: string){
    let myInput: any = document.getElementById(id);
    myInput.style.display = 'none';
  }

  setModal(id: string, value: string){
    let myInput: any = document.getElementById(id);
    myInput.style.display = value;
  }
}
