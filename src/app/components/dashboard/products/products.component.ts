import { Component, OnInit, DoCheck } from '@angular/core';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductComponent implements OnInit, DoCheck {
  products: any = [];
  allProducts: any = [];
  name: String = 'Product Name';
  category: String = 'Category';
  itemno: String = 'Item No.';
  price: String = 'Price';
  action: String = 'Action';
  constructor(private _product: ProductService) {}

  ngOnInit(): void {
    this._product.getProducts().subscribe((data) => {
      this.products = data;
      this.allProducts = data;
    });
  }

  ngDoCheck(): void {}

  deleteRow(event: Event, index: Number) {
    if (event.type == 'click') {
      this._product.deleteProductRow(index, this.products);
    }
  }

  editRow(event: Event, index: Number) {
    if (event.type == 'click') {
      this._product.editProductRow(index, this.products);
    }
  }

  expandRow(index: number) {
    this._product.expandProductRow(index, this.products);
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    let filterValueLower = filterValue.toLowerCase();

    if (filterValue === '') {
      this.products = this.allProducts;
    } else {
      this.products = this.allProducts.filter((product: any) =>
        product.name.toLowerCase().includes(filterValueLower)
      );
    }
  }
}
