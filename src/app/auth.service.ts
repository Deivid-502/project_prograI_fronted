import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private api: ApiService, private router: Router) {}

    login(u: string, p: string) {
        return this.api.login(u, p).pipe(
            tap(res => {
                if (res === 'OK') {
                    localStorage.setItem('logged', 'true');
                    this.router.navigate(['/inventory']);
                }
            })
        );
    }

    isLogged(): boolean {
        return localStorage.getItem('logged') === 'true';
    }

    logout() {
        localStorage.removeItem('logged');
        this.router.navigate(['/login']);
    }
}