import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-crear-modificar-tienda',
  templateUrl: './crear-modificar-tienda.component.html',
  styleUrls: ['./crear-modificar-tienda.component.css']
})
export class CrearModificarTiendaComponent implements OnInit {
  crearTienda: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Tienda'
  constructor(private fb: FormBuilder, private _tiendaService: TiendaService, private router: Router, private aRoute: ActivatedRoute) { 
    this.crearTienda = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.esEditar()
  }

  agregarEditarTienda() {
    this.submitted = true;

    if(this.crearTienda.invalid) {
      return;
    }

    if(this.id === null) {
      this.agregarTienda();
    } else {
      this.editarTienda(this.id);
    }
  }

  agregarTienda() {
    this.submitted = true;

    if(this.crearTienda.invalid){
      return;
    }

    const tienda: any = {
      nombre: this.crearTienda.value.nombre,
      email: this.crearTienda.value.email,
      telefono: this.crearTienda.value.telefono,
      estado: "Online"
    }

    this.loading = true

    this._tiendaService.agregarTienda(tienda).then(() => {
      this.loading = false;
      this.router.navigate(['/tiendas'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarTienda(id: string) {
    const tienda: any = {
      nombre: this.crearTienda.value.nombre,
      email: this.crearTienda.value.email,
      telefono: this.crearTienda.value.telefono,
      estado: "Online"
    }

    this.loading = true

    this._tiendaService.actualizarTienda(id, tienda)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/tiendas'])
      })
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar Tienda';
      this.loading = true;
      this._tiendaService.getTienda(this.id).subscribe( data => {
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.crearTienda.setValue({
          nombre: data.payload.data()['nombre'],
          email: data.payload.data()['email'],
          telefono: data.payload.data()['telefono'],
        })
      })
    }
  }

}

