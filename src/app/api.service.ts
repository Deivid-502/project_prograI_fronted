import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './products/product.model';

@Injectable()
export class ApiService {
    private base = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<string> {
        // Vulnerable: Password y usuario viajan en body, pero backend concatena inseguro
        return this.http.post(`${this.base}/login`, { username, password }, { responseType: 'text' });
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.base}/products`);
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
