import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { ExibeUsuarioComponent } from './exibe-usuario/exibe-usuario.component';

const routes: Routes = [
  { path: "", component: CadastraUsuarioComponent },
  { path: "listar", component: ExibeUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
