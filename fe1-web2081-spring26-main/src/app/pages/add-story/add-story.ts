import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule], // import module form
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup; // ten bien addForm

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      title: '', // form co input title
    });
  }

  submitForm() {
    console.log('Form', this.addForm.value);
    const data = this.addForm.value;
    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        alert('Story added successfully!');
      },
      error: () => {
        alert('Failed to add story!');
      },
    });
  }
}
