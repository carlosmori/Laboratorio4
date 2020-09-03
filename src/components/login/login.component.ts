import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // CLI imports router
import {Usuario} from '../../types/usuario'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario:String;
  public password:String;
  user: Usuario;
  correctUser: Usuario;
  constructor(private router: Router) {

   }

  ngOnInit(): void {
    this.correctUser = new Usuario('admin', '123');
  }
  Login(){
    this.user = new Usuario(this.usuario, this.password);
    if(this.user.usuario === this.correctUser.usuario && this.correctUser.password === this.user.password){
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/welcome']);
    }else{
      this.router.navigate(['/error']);
    }
  }
  
}
