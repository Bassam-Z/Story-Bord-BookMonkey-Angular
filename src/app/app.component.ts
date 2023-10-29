import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { WillkommenComponent } from './willkommen/willkommen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Story-Bord';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goTowillkommen() {
    this.router.navigate(['/home']);
  }
  goToPrufungLernen() {
    this.router.navigate(['/prufung-lernen']);
  }
  goToFragelist() {
    this.router.navigate(['/fragenlist']);
  }
  goToInfo() {
    this.router.navigate(['/info']);
  }
}
