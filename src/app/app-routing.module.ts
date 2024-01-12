import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { ExibeUsuarioComponent } from './exibe-usuario/exibe-usuario.component';
import { EditaUsuarioComponent } from './edita-usuario/edita-usuario.component';

const routes: Routes = [
  { path: "", component: ExibeUsuarioComponent },
  { path: "cadastrar", component: CadastraUsuarioComponent },
  { path: "editar/:id", component: EditaUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
