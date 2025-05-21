import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './products/product.model';

@Injectable()
export class ApiService {
    private base = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<string> {
        return this.http.post(`${this.base}/login`, { username, password }, { responseType: 'text' });
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.base}/products`);
    }

    // Nuevo método para obtener un solo producto
    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.base}/products/${id}`);
    }

    addProduct(p: Product): Observable<Product> {
        return this.http.post<Product>(`${this.base}/products`, p);
    }

    updateProduct(id: number, p: Product): Observable<Product> {
        return this.http.put<Product>(`${this.base}/products/${id}`, p);
    }

    deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.base}/products/${id}`);
    }
}