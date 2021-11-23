import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recuerdame

  constructor(private auth: AuthService,private router:Router) {
  }

  ngOnInit() {
    if(localStorage.getItem('email')){
        this.usuario.email=localStorage.getItem('email');
        this.recuerdame= true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      text:'Espere un momento Por Favor',
      type:'info',
      confirmButtonText:'Ok'
    });

    Swal.showLoading();


    this.auth.login(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();

        if(this.recuerdame){
          localStorage.setItem('email',this.usuario.email);
        }
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.error.error.message);
        if(err.error.error.message=="EMAIL_NOT_FOUND"){
          Swal.fire({
            type:'error',
            title:'No existe una cuenta registrada con ese email!!!.',
            
              
          });
        }else if(err.error.error.message=="INVALID_PASSWORD"){
          Swal.fire({
            type:'error',
            title:'El correo que ingresó o la contraseña no coincide.',
            
              
          });
        }else{
          Swal.fire({
            type:'error',
            title:'Cuenta deshabilitada',
          });
        }
        
      });
  }
}
