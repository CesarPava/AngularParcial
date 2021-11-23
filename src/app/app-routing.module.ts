import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {RegistroComponent} from './pages/registro/registro.component';
import {LoginComponent} from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { OrdenInfoComponent } from './pages/orden-info/orden-info.component';
import { TableListComponent } from './pages/table-list/table-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  { path: 'order-info', component:OrdenInfoComponent},
  { path: 'create-order', component: CreateOrderComponent},
  {path:'table-list',component:TableListComponent},
  {path: '**', redirectTo: 'create-order'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
