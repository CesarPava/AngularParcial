import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MetodosService } from '../../services/metodos.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crear-modificar-metodo-pago',
  templateUrl: './crear-modificar-metodo-pago.component.html',
  styleUrls: ['./crear-modificar-metodo-pago.component.css']
})
export class CrearModificarMetodoPagoComponent implements OnInit {

  crearMetodoPago: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Método de Pago'

  constructor(private fb: FormBuilder, private _metodoService: MetodosService, private router: Router, private aRoute: ActivatedRoute) { 
    this.crearMetodoPago = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      porcentaje: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarMetodo() {
    this.submitted = true;

    if(this.crearMetodoPago.invalid) {
      return;
    }

    if(this.id === null) {
      this.agregarMetodo();
    } else {
      this.editarMetodo(this.id);
    }
  }

  agregarMetodo() {
    this.submitted = true;

    if(this.crearMetodoPago.invalid){
      return;
    }

    const metodo: any = {
      nombre: this.crearMetodoPago.value.nombre,
      descripcion: this.crearMetodoPago.value.descripcion,
      porcentaje: this.crearMetodoPago.value.porcentaje,
    }

    this.loading = true

    this._metodoService.agregarMetodo(metodo).then(() => {
      this.loading = false;
      this.router.navigate(['/dashboard'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarMetodo(id: string) {
    const metodo: any = {
      nombre: this.crearMetodoPago.value.nombre,
      descripcion: this.crearMetodoPago.value.descripcion,
      porcentaje: this.crearMetodoPago.value.porcentaje,
    }

    this.loading = true

    this._metodoService.actualizarMetodo(id, metodo)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/dashboard'])
      })
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar Método de Pago';
      this.loading = true;
      this._metodoService.getMetodo(this.id).subscribe( data => {
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.crearMetodoPago.setValue({
          nombre: data.payload.data()['nombre'],
          descripcion: data.payload.data()['descripcion'],
          porcentaje: data.payload.data()['porcentaje'],
        })
      })
    }
  }

}
