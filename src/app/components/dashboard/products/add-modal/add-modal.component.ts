import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css'],
})
export class AddModalComponent implements OnInit {
  modalTitle: String;

  @Input() products: any = [];
  addModalVisible: String = '';
  formModel: any = {
    name: '',
    itemno: '',
    category: '',
    price: 0,
    editable: false,
  };
  constructor(private _product: ProductService, public route: Router) {
    this.modalTitle = 'Add New Product';
    console.log(this.products);
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
  }

  getFormDetails() {
    console.log(this.products, this.formModel);
    this._product.addProductRow(this.formModel, this.products);
  }

  close() {}
}
