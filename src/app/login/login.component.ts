import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, RouterModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username ="admin";
  password ="admin";

  constructor(private router: Router){}

  login(){
    if(this.username && this.password){
      this.router.navigate(['/dashboard']);
   }
  }
}
