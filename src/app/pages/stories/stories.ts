import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'Dragon Ball',
      author: 'Oda',
      releaseYear: '2006',
      category: 'Truyện Tranh',
      image:
        'https://www.nicepng.com/png/detail/134-1346760_ultra-instinct-dragon-ball-super-son-goku.png',
      views: 100000,
    },
    {
      title: 'Attack On Titan',
      author: 'Duoka',
      releaseYear: '2008',
      category: 'Anime',
      image: 'https://wallpaperaccess.com/full/187123.jpg',
      views: 70000,
    },
    {
      title: 'Bleach',
      author: 'Mikuzu',
      releaseYear: '2009',
      category: 'Phim hành động',
      image: 'https://static.zerochan.net/Attack.on.Titan.full.2140394.jpg',
      views: 40000,
    },
  ];

  deleteStory(index: Number) {
    console.log('Ban da Click : ', index);
  }
  editStory(index: Number) {
    console.log('Ban da Click : ', index);
  }
}
