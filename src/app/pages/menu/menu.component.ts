import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  correo!:String
  loginStatus:Boolean=true

  @Input() algo:Boolean

  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.algo)
    if(localStorage.getItem('email' )){
      this.loginStatus=true;
      this.correo=this.usuario.email=localStorage.getItem('email');
      
  }else{
    this.loginStatus=false
  }
  
  }

  ngOnChanges() {

  }

  cerrarSesion(){
      localStorage.removeItem('email')
      this.loginStatus=false;
      console.log(this.loginStatus)
      this.router.navigateByUrl('/login');
      
      (document.querySelector("#petro1") as HTMLDivElement).style.display="flex";
      (document.querySelector("#petro2") as HTMLDivElement).style.display="none";
      (document.querySelector(".micorreo") as HTMLParagraphElement).innerText=""
  }

  iniciarSesion(){
    this.loginStatus=true;
    console.log(this.loginStatus)
    this.ngOnChanges()
    this.router.navigateByUrl('/login');
}

  

}
