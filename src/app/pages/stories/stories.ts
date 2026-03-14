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
      image: 'https://wallpapers.com/images/featured/bleach-anime-e0xxgoqm3leel7kq.jpg',
      views: 40000,
    },
  ];
}
