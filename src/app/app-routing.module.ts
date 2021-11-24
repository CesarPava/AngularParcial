import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {RegistroComponent} from './pages/registro/registro.component';
import {LoginComponent} from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { OrdenInfoComponent } from './pages/orden-info/orden-info.component';
import { TableListComponent } from './pages/table-list/table-list.component';
import { CrearModificarProductoComponent } from './pages/crear-modificar-producto/crear-modificar-producto.component';
import { CrearModificarMetodoPagoComponent } from './pages/crear-modificar-metodo-pago/crear-modificar-metodo-pago.component';
import { CrearModificarOfertaComponent } from './pages/crear-modificar-oferta/crear-modificar-oferta.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DomiciliariosComponent } from './pages/domiciliarios/domiciliarios.component';
import { CreateDomiciliarioComponent } from './pages/create-domiciliario/create-domiciliario.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';
import { CrearModificarTiendaComponent } from './pages/crear-modificar-tienda/crear-modificar-tienda.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  { path: 'order-info', component:OrdenInfoComponent},
  { path: 'create-order', component: CreateOrderComponent},
  {path:'table-list',component:TableListComponent},
  {path: 'create-producto', component: CrearModificarProductoComponent},
  {path: 'edit-producto/:id', component: CrearModificarProductoComponent},
  {path: 'create-metodo', component: CrearModificarMetodoPagoComponent},
  {path: 'edit-metodo/:id', component: CrearModificarMetodoPagoComponent},
  {path: 'create-oferta', component: CrearModificarOfertaComponent},
  {path: 'edit-oferta/:id', component: CrearModificarOfertaComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'domiciliarios',component:DomiciliariosComponent},
  {path:'create-domiciliarios',component:CreateDomiciliarioComponent},
  {path: 'tiendas', component:TiendasComponent},
  {path: 'create-tienda', component:CrearModificarTiendaComponent},
  {path: 'edit-tienda/:id', component:CrearModificarTiendaComponent},
  {path: '**', redirectTo: 'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
