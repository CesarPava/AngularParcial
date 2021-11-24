import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomiciliariosService } from 'src/app/services/domiciliarios.service';

@Component({
  selector: 'app-create-domiciliario',
  templateUrl: './create-domiciliario.component.html',
  styleUrls: ['./create-domiciliario.component.css']
})
export class CreateDomiciliarioComponent implements OnInit {
  createDomiciliario:FormGroup;
  submiteed=false;

  constructor(private fb:FormBuilder,private _domiciliarioService:DomiciliariosService,private router:Router) {

      this.createDomiciliario=this.fb.group({
        nombre:['',Validators.required],
        telefono:['',Validators.required],
        cedula:['',Validators.required]
      })
   }

  ngOnInit() {
  }

  agregarDomiciliario(){

    this.submiteed=true;
    if(this.createDomiciliario.invalid){
      return;
    }
    
    const domiciliario:any = {
      nombre:this.createDomiciliario.value.nombre,
      telefono:this.createDomiciliario.value.telefono,
      cedula:this.createDomiciliario.value.cedula,
      estado:"activo"
    }
        
    this._domiciliarioService.agregarDomiciliario(domiciliario).then(() =>{
      this.router.navigate(['/domiciliarios'])
    }).catch(error=>{
      console.log(error);
    })

    
  }


}
