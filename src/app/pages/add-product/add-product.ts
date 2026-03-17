import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log(this.addForm.value);
  }
}
