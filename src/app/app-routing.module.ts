import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { ExibeUsuarioComponent } from './exibe-usuario/exibe-usuario.component';

const routes: Routes = [
  { path: "", component: ExibeUsuarioComponent },
  { path: "cadastrar", component: CadastraUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
