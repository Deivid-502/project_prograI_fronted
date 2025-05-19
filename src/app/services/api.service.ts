import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  login(user: string, pass: string): Observable<string> {
    // Construcción insegura de parámetros
    const params = new HttpParams()
      .set('username', user)
      .set('password', pass);
    return this.http.post<string>(`${this.base}/login`, null, { params, responseType: 'text' as 'json' });
  }

  getProducts() {
    return this.http.get<any[]>(`${this.base}/products`);
  }

  addProduct(name: string, desc: string) {
    const params = new HttpParams().set('name', name).set('description', desc);
    return this.http.post(`${this.base}/products`, null, { params, responseType: 'text' as 'json' });
  }

  updateProduct(id: number, name: string, desc: string) {
    const params = new HttpParams().set('name', name).set('description', desc);
    return this.http.put(`${this.base}/products/${id}`, null, { params, responseType: 'text' as 'json' });
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.base}/products/${id}`, { responseType: 'text' as 'json' });
  }
}
