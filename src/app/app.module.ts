import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {RegistroComponent} from './pages/registro/registro.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MenuComponent } from './pages/menu/menu.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TableListComponent } from './pages/table-list/table-list.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { OrdenInfoComponent } from './pages/orden-info/orden-info.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { CrearModificarProductoComponent } from './pages/crear-modificar-producto/crear-modificar-producto.component';
import { CrearModificarMetodoPagoComponent } from './pages/crear-modificar-metodo-pago/crear-modificar-metodo-pago.component';
import { CrearModificarOfertaComponent } from './pages/crear-modificar-oferta/crear-modificar-oferta.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DomiciliariosComponent } from './pages/domiciliarios/domiciliarios.component';
import { CreateDomiciliarioComponent } from './pages/create-domiciliario/create-domiciliario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    TableListComponent,
    CreateOrderComponent,
    OrdenInfoComponent,
    CrearModificarProductoComponent,
    CrearModificarMetodoPagoComponent,
    CrearModificarOfertaComponent,
    DashboardComponent,
    DomiciliariosComponent,
    CreateDomiciliarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule
  ],
  providers: [AuthGuard,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
