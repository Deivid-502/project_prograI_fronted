import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    // formulario reactive, simple y directo
    form = this.fb.group({ username: ['', Validators.required], password: ['', Validators.required] });
    error = '';

    constructor(private fb: FormBuilder, private auth: AuthService) {}

    submit() {
        const { username, password } = this.form.value;
        this.auth.login(username!, password!).subscribe({
            next: () => {},
            error: () => this.error = 'Credenciales inválidas. Intenta de nuevo.'
        });
    }
}