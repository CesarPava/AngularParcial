import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginApp';
  loginStatus:Boolean=true
  ngOnInit() {
    if(localStorage.getItem('email')){
      (document.querySelector("#petro2") as HTMLDivElement).style.display="flex";
      (document.querySelector("#petro1") as HTMLDivElement).style.display="none";
      this.loginStatus=true;

      
  }else{
    
    (document.querySelector("#petro1") as HTMLDivElement).style.display="flex";
      (document.querySelector("#petro2") as HTMLDivElement).style.display="none";
    this.loginStatus=false
  }
  

  
  }


}


