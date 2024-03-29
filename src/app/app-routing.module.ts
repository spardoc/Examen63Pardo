import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  {path:"paginas/acerca", component: AcercadeComponent},
  {path:"paginas/clientes", component: ClientesComponent},
  {path:"paginas/facturas", component: FacturasComponent},
  {path:"paginas/formulario", component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
