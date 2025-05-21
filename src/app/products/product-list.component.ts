import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    displayedColumns = ['id', 'name', 'description', 'price', 'actions'];

    constructor(
        private api: ApiService,
        private auth: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loadProducts();
    }

    private loadProducts() {
        this.api.getProducts().subscribe(data => this.products = data);
    }

    edit(id: number) {
        this.router.navigate(['/inventory/edit', id]);
    }

    delete(id: number) {
        this.api.deleteProduct(id).subscribe(() => this.loadProducts());
    }

    logout() {
        this.auth.logout();
    }
}
