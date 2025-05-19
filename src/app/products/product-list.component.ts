import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  formVisible = false;
  selectedProduct: Product | null = null;

  constructor(private api: ApiService) {}

  ngOnInit() { this.reload(); }

  reload() {
    this.api.getProducts().subscribe(data => this.products = data);
  }

  showForm() {
    this.selectedProduct = null;
    this.formVisible = true;
  }

  edit(p: Product) {
    this.selectedProduct = p;
    this.formVisible = true;
  }

  delete(id: number) {
    this.api.deleteProduct(id).subscribe(() => this.reload());
  }
}
