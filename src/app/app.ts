import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  name = 'Nguyen Van A';
  age = 25;
  //method
  sayHello() {
    console.log('Hello');
  }

  handleClick() {
    alert('Bạn đã click button');
  }
}
