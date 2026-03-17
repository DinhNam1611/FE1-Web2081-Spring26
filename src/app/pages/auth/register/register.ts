import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['' , [Validators.required , Validators.minLength(6)]],
    });
  }
  get username() {
    return this.addForm.get('username');
  }
  get email() {
    return this.addForm.get('email');
  }
  get password() {
    return this.addForm.get('password');
  }
  submitForm() {
    console.log(this.addForm.value);
  }
}
