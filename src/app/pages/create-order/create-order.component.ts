import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdenService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  createOrder: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private _orderService: OrdenService, private router: Router) { 
    this.createOrder = this.fb.group({
      usuario: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarOrden() {
    this.submitted = true;

    if(this.createOrder.invalid){
      return;
    }
    const order: any = {
      usuario: this.createOrder.value.usuario,
      precio: 0,
      productos: [],
      estado: "En curso",
      precioFinal: 0
    }
    this._orderService.agregarOrder(order).then(() =>{
      this.router.navigate(['/table-list'])
    }).catch(error => {
      console.log(error);
    })
  }

}
