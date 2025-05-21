import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private logged = false;

    constructor(private api: ApiService, private router: Router) {}

    login(u: string, p: string) {
        return this.api.login(u, p).pipe(
            tap(res => {
                if (res === 'OK') {
                    this.logged = true;
                    this.router.navigate(['/inventory']);
                }
            })
        );
    }

    isLogged(): boolean {
        return this.logged;
    }

    logout() {
        this.logged = false;
        this.router.navigate(['/login']);
    }
}
