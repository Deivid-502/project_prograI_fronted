import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './products/product.model';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    // Usar la URL definida en environment (runtime via env.js en producción)
    private base: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<string> {
        return this.http.post(`${this.base}/login`, { username, password }, { responseType: 'text' });
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.base}/products`);
    }

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
