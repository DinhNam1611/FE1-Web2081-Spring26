import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  id: any;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID', this.id);
    this.editForm = this.fb.group({
      title: '',
    });
  }

  ngOnInit() {
    // get detail story by id
    this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
      next: (data: any) => {
        console.log(data);
        this.editForm.patchValue(data);
      },
    });
  }

  submitForm() {
    console.log(this.editForm.value);
    // call api update story
    this.http.put(`http://localhost:3000/stories/${this.id}`, this.editForm.value).subscribe({
      next: () => {
        alert('Story updated successfully!');
      },
      error: () => {
        alert('Failed to update story!');
      },
    });
  }
}
