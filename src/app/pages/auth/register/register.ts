import { HttpClient } from '@angular/common/http';
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

  loading = false ; 
  error = '';
  success = '';
  
  constructor(private fb: FormBuilder , private http: HttpClient) {
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
    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.addForm.value;

    this.http.post('http://localhost:3000/users' , data).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Dang ky thanh cong";
        this.addForm.reset();
        
      },

      error: () => {
        this.loading  = false ;
        this.error = 'Dang ky That Bai'
      }
    });
  }
}
