import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
    editing = false;
    id!: number;

    // Inicializamos price en 0 (número), no null, para que patchValue acepte el valor
    form = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: [0, [Validators.required, Validators.min(0.01)]]
    });

    constructor(
        private fb: FormBuilder,
        private api: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.editing = true;
                this.id = +params['id'];
                this.api.getProduct(this.id).subscribe(prod => {
                    if (prod) {
                        // patchValue acepta correctamente ahora que price es number
                        this.form.patchValue(prod);
                    }
                });
            }
        });
    }

    submit() {
        const prod = this.form.value as Product;
        if (this.editing) {
            this.api.updateProduct(this.id, prod)
                .subscribe(() => this.router.navigate(['/inventory']));
        } else {
            this.api.addProduct(prod)
                .subscribe(() => this.router.navigate(['/inventory']));
        }
    }
    // Agrega este método para navegación
    cancel() {
        this.router.navigate(['/inventory']);
    }
}
