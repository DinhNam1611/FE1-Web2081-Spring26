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

  constructor(private fb: FormBuilder) {
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
    console.log(this.addForm.value);
    
  }
}
