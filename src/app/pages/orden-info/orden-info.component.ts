import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-orden-info',
  templateUrl: './orden-info.component.html',
  styleUrls: ['./orden-info.component.css']
})
export class OrdenInfoComponent implements OnInit {
  id: string | null;
  usuario: string | null;
  precio: string | null;
  productos: string | null;
  estado: string | null;
  precioFinal: string | null;
  constructor(private _ordenService: OrdenService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.cargarDatos()
  }

  cargarDatos() {
    this._ordenService.getOrder(this.id).subscribe( data => {
      console.log(data.payload.data()['usuario']);
      this.usuario = data.payload.data()['usuario'];
      this.precio= data.payload.data()['precio'];
      this.productos =  data.payload.data()['productos'];
      this.estado= data.payload.data()['estado'];
      this.precioFinal= data.payload.data()['precioFinal']
      })
  }
}