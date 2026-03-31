import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stories',
  imports: [RouterLink],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit {
  stories: any = [];
  loading = false;
  error = '';
  deletingId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';
    this.http.get<any[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.loading = false;
        this.stories = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Co loi xay ra';
      },
    });
  }
  deleteStory(id: number) {
    const confirmDelete = confirm("Ban co chac muon xoa story nay khong?");
    if (!confirmDelete) {
      return;
    }
     this.deletingId = id;
    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: ()=> {
        this.getStories();
        this.deletingId = null;
        alert("Xoa story thanh cong");
      },
      error: () => {
        this.deletingId = null;
        alert("Co loi xay ra khi xoa story");
      }
    })
  }
}

