import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalBusComponent } from './Componentes/Bus-Componente/principal-bus/principal-bus.component';
import { PrincipalChoferComponent } from './Componentes/Chofer-Componente/principal-chofer/principal-chofer.component';

const routes: Routes = [
  {path: 'bus', component:PrincipalBusComponent},
  {path: 'chofer', component:PrincipalChoferComponent},
  {path: '**', pathMatch: 'full' , redirectTo:'chofer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
