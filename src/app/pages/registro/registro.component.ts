import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private auth: AuthService,private router:Router) {
  }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    console.log("HOLAAAAAAAAAAA")
    if (form.invalid) {
      console.log("HOLAAAAAAAAAAA")
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      text:'Espere un momento Por Favor',
      type:'info',
      confirmButtonText:'Ok'
    });

    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/home');


      }, (err) => {
        console.log(err.error.error.message);

        if(err.error.error.message=="EMAIL_EXISTS"){
          Swal.fire({
            type:'error',
            title:'Este correo ya se registró antiormente.',
            
              
          });
        }else if(err.error.error.message=="TOO_MANY_ATTEMPTS"){
          Swal.fire({
            type:'error',
            title:'Ya ha excedido el número maximo de intentos',
          });
        }

      });
  }

}
