import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {
  tiendas: any[] = [];
  tiendas2: any[] = [];
  constructor(private _tiendaService: TiendaService) { }

  ngOnInit() {
    this.getTiendas()
    this.getTiendasOffline()
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
  getTiendasOffline() {
    this._tiendaService.getTiendasOffline().subscribe(data => {
      this.tiendas2 = [];
      data.forEach((element:any) => {
        this.tiendas2.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.tiendas2)
    })
  }

  eliminarTienda(id: string) {
    console.log('SEB')
    this._tiendaService.eliminarTienda(id)
      .then(() => {

        console.log('tienda eliminada con éxito')
      })
      .catch( error => {
        console.log(error)
      });
  }

  activarTienda(id: string){
    this._tiendaService.activarTienda(id).then(() => {
    }).catch(error => {
      console.log(error);
    })
  }

  desactivarTienda(id: string){
    this._tiendaService.desactivarTienda(id).then(() => {
    }).catch(error => {
      console.log(error);
    })
  }

}
