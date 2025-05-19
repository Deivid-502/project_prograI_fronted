import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = '';
  pass = '';
  response = '';

  constructor(private api: ApiService) {}

  onSubmit() {
    this.api.login(this.user, this.pass).subscribe(
      res => this.response = res,
      err => this.response = err.error  // Muestra errores crudos del backend
    );
  }
}
