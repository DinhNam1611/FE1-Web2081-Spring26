import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  editForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  id: string | null = null

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required]],
      views: [0, [Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.getFormByID();
  }

  getFormByID() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data: any) => {
          console.log(data);
          this.editForm.patchValue({
            title: data.title,
            author: data.author,
            views: data.views,
          });
        },

        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }

  get author() {
    return this.editForm.get('author');
  }
  get title() {
    return this.editForm.get('title');
  }
  get views() {
    return this.editForm.get('views');
  }

  submitForm() {
    this.loading = true;
    this.error = '';
    this.success = '';
    const data = this.editForm.value;

    this.http.patch(`http://localhost:3000/stories/${this.id}`, {title: data.title}).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Cap Nhat Thanh Cong';
        alert('Cap Nhat Thanh Cong');
        this.getFormByID();
      },

      error: () => {
        this.loading = false;
        this.error = 'Co Loi Xay Ra';
      },
    });
  }
}
