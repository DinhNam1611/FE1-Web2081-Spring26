import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submitForm() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const data = this.loginForm.value;

    this.http.post('http://localhost:3000/login', data).subscribe({
      next: () => {
        alert('Dang Nhap Thanh Cong');
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigateByUrl('/stories');
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
