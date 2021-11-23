import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OfertasService } from '../../services/ofertas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crear-modificar-oferta',
  templateUrl: './crear-modificar-oferta.component.html',
  styleUrls: ['./crear-modificar-oferta.component.css']
})
export class CrearModificarOfertaComponent implements OnInit {

  crearOferta: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Oferta'

  constructor(private fb: FormBuilder, private _ofertaService: OfertasService, private router: Router, private aRoute: ActivatedRoute) { 
    this.crearOferta = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      porcentaje: ['', Validators.required],
      inicio: ['', Validators.required],
      fin: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.esEditar()
  }

  agregarEditarOferta() {
    this.submitted = true;

    if(this.crearOferta.invalid) {
      return;
    }

    if(this.id === null) {
      this.agregarOferta();
    } else {
      this.editarOferta(this.id);
    }
  }

  agregarOferta() {
    this.submitted = true;

    if(this.crearOferta.invalid){
      return;
    }

    const oferta: any = {
      nombre: this.crearOferta.value.nombre,
      descripcion: this.crearOferta.value.descripcion,
      porcentaje: this.crearOferta.value.porcentaje,
      inicio: this.crearOferta.value.inicio,
      fin: this.crearOferta.value.fin,
    }

    this.loading = true

    this._ofertaService.agregarOferta(oferta).then(() => {
      this.loading = false;
      this.router.navigate(['/dashboard'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarOferta(id: string) {
    const oferta: any = {
      nombre: this.crearOferta.value.nombre,
      descripcion: this.crearOferta.value.descripcion,
      porcentaje: this.crearOferta.value.porcentaje,
      inicio: this.crearOferta.value.inicio,
      fin: this.crearOferta.value.fin,
    }

    this.loading = true

    this._ofertaService.actualizarOferta(id, oferta)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/dashboard'])
      })
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar Oferta';
      this.loading = true;
      this._ofertaService.getOferta(this.id).subscribe( data => {
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.crearOferta.setValue({
          nombre: data.payload.data()['nombre'],
          descripcion: data.payload.data()['descripcion'],
          porcentaje: data.payload.data()['porcentaje'],
          inicio: data.payload.data()['inicio'],
          fin: data.payload.data()['fin'],
        })
      })
    }
  }

}
