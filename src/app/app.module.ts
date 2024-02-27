import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { ExibeUsuarioComponent } from './exibe-usuario/exibe-usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalExcluirUsuarioComponent } from './modal-excluir-usuario/modal-excluir-usuario.component';
import { FormsModule } from '@angular/forms';
import { EditaUsuarioComponent } from './edita-usuario/edita-usuario.component';
import { NaoEncontradaComponent } from './extras/nao-encontrada/nao-encontrada.component';
import { LoginComponent } from './extras/login/login.component';

import { FakeApiService } from './service/fake-api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PhoneNumberPipe } from './pipe/phone-number.pipe';

@NgModule({
  declarations: [AppComponent, CadastraUsuarioComponent, ExibeUsuarioComponent, ModalExcluirUsuarioComponent, EditaUsuarioComponent, NaoEncontradaComponent, LoginComponent, PhoneNumberPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(FakeApiService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
