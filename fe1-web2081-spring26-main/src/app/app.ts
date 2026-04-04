import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title = 'my-app';
  fullName: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkAuthStatus();
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.checkAuthStatus();
    });
  }

  checkAuthStatus() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    console.log(user)
    if (token && user) {
      this.isLoggedIn = true;
      const userObj = JSON.parse(user);
      this.fullName = userObj.fullName || userObj.username || '';
    } else {
      this.isLoggedIn = false;
      this.fullName = '';
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.fullName = '';
    this.router.navigateByUrl('/login');
  }

  sayHello() {
    console.log('hello ');
    alert('hello ' + this.fullName);
  }
}
