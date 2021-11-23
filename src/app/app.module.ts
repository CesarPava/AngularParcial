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

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    TableListComponent,
    CreateOrderComponent,
    OrdenInfoComponent
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
