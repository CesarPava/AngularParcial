import {Component, OnInit} from '@angular/core';
import { DomiciliariosService } from 'src/app/services/domiciliarios.service';
import { OrdenService } from 'src/app/services/orden.service';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ordenes: any[]=[]
  tiendas:any[]=[]
  domiciliarios:any[]=[]
  constructor(private _ordenService: OrdenService,private _tiendaService: TiendaService,private _domiciliariosService:DomiciliariosService) {
  }

  ngOnInit() {
    this.getOrders();
    this.getDomiciliaros();
    this.getTiendas();
  }

  getOrders() {
    this._ordenService.getOrders().subscribe(data => {
      this.ordenes = []
      data.forEach((element:any) => {
        this.ordenes.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.ordenes)
    });
  }

  getTiendas() {
    this._tiendaService.getTiendas().subscribe(data => {
      this.tiendas = [];
      data.forEach((element:any) => {
        this.tiendas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.tiendas)
    })
  }

  getDomiciliaros() {
    this._domiciliariosService.getDomiciliarios().subscribe(data => {
      this.domiciliarios = []
      data.forEach((element:any) => {
        this.domiciliarios.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.domiciliarios)
    });
  }

}
