import { Component, OnInit } from '@angular/core';
import UsersJson from '../../assets/data.json';
import { Router } from '@angular/router';

interface USERS {
  usuario : String;
  contrasenia : String;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {
  usu = '';
  cont = '';
  
  constructor ( private router:Router){}

  Users: USERS[] = UsersJson;
  
  //Valida el usuario
  logear():void {
    for (var i = 0; i < this.Users.length; i++ ){
      if ( this.usu == this.Users[i].usuario && this.cont == this.Users[i].contrasenia){
          console.log('Es el usurio!');
          this.router.navigate(['/menu']);
      }
    }
  }

}
