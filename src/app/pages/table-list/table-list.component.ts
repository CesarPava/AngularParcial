import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  ordenes: any[] = [];

  constructor(private _ordenService: OrdenService) { 
  }

  ngOnInit() {
    this.getOrders()
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

  cancelarOrden(id: string){
    this._ordenService.cancelarOrden(id).then(() => {
      console.log('eliminado');
    }).catch(error => {
      console.log(error);
    })
  }

  entregarOrden(id: string){
    this._ordenService.entregarOrden(id).then(() => {
      console.log('Entregado');
    }).catch(error => {
      console.log(error);
    })
  }
}
