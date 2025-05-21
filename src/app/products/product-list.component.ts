import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    // Definición de columnas para la tabla de Material
    displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions'];
    products: Product[] = [];

    constructor(private api: ApiService, private router: Router) {}

    ngOnInit() {
        this.load();
    }

    // Carga los productos y refresca la tabla
    load() {
        this.api.getProducts().subscribe(data => this.products = data);
    }

    // Navega al formulario de edición
    edit(id: number) {
        this.router.navigate(['/inventory/edit', id]);
    }

    // Elimina y recarga
    delete(id: number) {
        this.api.deleteProduct(id).subscribe(() => this.load());
    }
}