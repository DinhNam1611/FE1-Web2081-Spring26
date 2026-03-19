import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateAsync } from '@angular/forms/signals';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = ''
  success = ''

  constructor(private fb: FormBuilder , private http: HttpClient) {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required]],
      views: [0, [Validators.min(0)]],
    });
  }
  get author() {
    return this.addForm.get('author');
  }
  get title() {
    return this.addForm.get('title');
  }
  get views() {
    return this.addForm.get('views');
  }

  submitForm() {
    this.loading = true;
    this.error = ''
    this.success = ''
    const data = this.addForm.value

    this.http.post('http://localhost:3000/stories' , data ).subscribe({
      next: () => {
        this.loading = false
        this.success = "Them Moi Thanh Cong"
        this.addForm.reset();
      },

      error: () => {
        this.loading = false;
        this.error = "Co Loi Xay Ra"
      }
    });
    
  }
}
