import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pl',
  templateUrl: './pl.component.html',
  styleUrls: ['./pl.component.css'],
})
export class PLComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTolernmodus() {
    this.router.navigate(['prufung-lernen/lernmodus/fwlfrage']);
  }
  goToprufmodus() {
    this.router.navigate(['prufung-lernen/prufmodus']);
  }
}
