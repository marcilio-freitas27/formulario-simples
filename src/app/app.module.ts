import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { ExibeUsuarioComponent } from './exibe-usuario/exibe-usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalExcluirUsuarioComponent } from './modal-excluir-usuario/modal-excluir-usuario.component';

@NgModule({
  declarations: [AppComponent, CadastraUsuarioComponent, ExibeUsuarioComponent, ModalExcluirUsuarioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
