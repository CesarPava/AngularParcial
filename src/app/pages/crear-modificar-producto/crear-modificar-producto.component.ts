import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-crear-modificar-producto',
  templateUrl: './crear-modificar-producto.component.html',
  styleUrls: ['./crear-modificar-producto.component.css']
})
export class CrearModificarProductoComponent implements OnInit {

  crearProducto: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Producto'


  constructor(private fb: FormBuilder, private _productoService: ProductosService, private router: Router, private aRoute: ActivatedRoute) { 
    this.crearProducto = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      unidades: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar()
  }

  agregarEditarProducto() {
    this.submitted = true;

    if(this.crearProducto.invalid) {
      return;
    }

    if(this.id === null) {
      this.agregarProducto();
    } else {
      this.editarProducto(this.id);
    }
  }

  agregarProducto() {
    this.submitted = true;

    if(this.crearProducto.invalid){
      return;
    }

    const producto: any = {
      nombre: this.crearProducto.value.nombre,
      descripcion: this.crearProducto.value.descripcion,
      precio: this.crearProducto.value.precio,
      unidades: this.crearProducto.value.unidades
    }

    this.loading = true

    this._productoService.agragarProducto(producto).then(() => {
      this.loading = false;
      this.router.navigate(['/dashboard'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarProducto(id: string) {
    const producto: any = {
      nombre: this.crearProducto.value.nombre,
      descripcion: this.crearProducto.value.descripcion,
      precio: this.crearProducto.value.precio,
      unidades: this.crearProducto.value.unidades
    }

    this.loading = true

    this._productoService.actualizarProducto(id, producto)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/dashboard'])
      })
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar Producto';
      this.loading = true;
      this._productoService.getProducto(this.id).subscribe( data => {
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.crearProducto.setValue({
          nombre: data.payload.data()['nombre'],
          descripcion: data.payload.data()['descripcion'],
          precio: data.payload.data()['precio'],
          unidades: data.payload.data()['unidades']
        })
      })
    }
  }

}
