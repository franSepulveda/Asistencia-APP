import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlumnoComponent } from './componentes/listar-alumno/listar-alumno.component';
const routes: Routes = [
  {path:'listar-alumno', component: ListarAlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
