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
    form = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: [0, [Validators.required, Validators.min(0)]]
    });

    constructor(
        private fb: FormBuilder,
        private api: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params.subscribe(p => {
            if (p['id']) {
                this.editing = true;
                this.id = +p['id'];
                this.api.getProducts().subscribe(list => {
                    const prod = list.find(x => x.id === this.id)!;
                    this.form.patchValue(prod);
                });
            }
        });
    }

    submit() {
        // Aserción para tratar form.value como Product completo
        const prod = this.form.value as Product;

        if (this.editing) {
            this.api.updateProduct(this.id, prod).subscribe(() => this.router.navigate(['/inventory']));
        } else {
            this.api.addProduct(prod).subscribe(() => this.router.navigate(['/inventory']));
        }
    }
}
