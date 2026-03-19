import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder, private productService: ProductService
  ) {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.min(1)]],
      category: [''],
    });
  }
  get name() {
    return this.addForm.get('name');
  }
  get price() {
    return this.addForm.get('price');
  }
  submitForm() {
    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.addForm.value;

    this.productService.create(data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Them san pham thanh cong';
        this.addForm.reset();
      },

      error: () => {
        this.loading = false;
        this.error = 'Them khong thanh cong';
      },
    });
  }
}
