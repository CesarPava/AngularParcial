import { Component, OnInit } from '@angular/core';
import { DomiciliariosService } from 'src/app/services/domiciliarios.service';

@Component({
  selector: 'app-domiciliarios',
  templateUrl: './domiciliarios.component.html',
  styleUrls: ['./domiciliarios.component.css']
})
export class DomiciliariosComponent implements OnInit {
  domiciliarios: any[]=[];

  constructor(private _domiciliariosService:DomiciliariosService) { }

  ngOnInit() {
    this.getDomiciliaros();
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

  eliminarDomiciliario(id: string){
    this._domiciliariosService.eliminarDomiciliario(id).then(() => {
      console.log('eliminado');
    }).catch(error => {
      console.log(error);
    })
  }

  cambiarEstadoDomiciliario(id: string){
    this._domiciliariosService.cambiarEstadoDomiciliario(id).then(() => {
      console.log('Entregado');
    }).catch(error => {
      console.log(error);
    })
  }
}
