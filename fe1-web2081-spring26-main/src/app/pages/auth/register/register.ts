import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;
  error = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  submitForm() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const data = this.registerForm.value;

    if (data.password != data.confirmPassword) {
      this.error = "Xác Nhận Mật Khẩu Không Khớp"
      return;
    }

    this.http.post('http://localhost:3000/register', data).subscribe({
      next: () => {
        alert('Dang Ky Thanhf Cong');
        this.registerForm.reset();
        this.router.navigateByUrl('/login');
      },

      error(err) {
        alert('Dang Ky Thất Bại');
        console.log(err);
      },
    });
  }
}
