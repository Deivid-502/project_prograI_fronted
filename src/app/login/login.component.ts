import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    error = '';

    constructor(private fb: FormBuilder, private auth: AuthService) {}

    submit() {
        if (this.form.valid) {
            const { username, password } = this.form.value;
            this.auth.login(username!, password!).subscribe({
                error: () => this.error = 'Credenciales inválidas'
            });
        }
    }
}
