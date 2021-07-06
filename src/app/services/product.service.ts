import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any = [];
  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<any>('../../assets/data.json');
  }

  deleteProductRow(index: Number, products:any) {
    products.splice(index, 1);
  }

  editProductRow(index: Number, products:any) {
    products[index as any].editable = !products[index as any]
      .editable;
    return products[index as any].editable;
  }

  addProductRow(newProduct: any, products: any) {
    products.push(newProduct);
  }

  expandProductRow(index: Number, products:any) {
    products[index as any].expand = !products[index as any].expand;
    return products[index as any].expand;
  }
}
