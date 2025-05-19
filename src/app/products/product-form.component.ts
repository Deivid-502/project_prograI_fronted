import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product | null = null;
  @Output() saved = new EventEmitter<void>();
  name = '';
  desc = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    if (this.product) {
      this.name = this.product.name;
      this.desc = this.product.description;
    }
  }

  save() {
    if (this.product) {
      this.api.updateProduct(this.product.id, this.name, this.desc)
        .subscribe(() => this.saved.emit());
    } else {
      this.api.addProduct(this.name, this.desc)
        .subscribe(() => this.saved.emit());
    }
  }
}
