import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-c-v-frage',
  templateUrl: './m-c-v-frage.component.html',
  styleUrls: ['./m-c-v-frage.component.css'],
})
export class MCVFrageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToMCFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-m-w-start',
    ]);
  }
  goToSFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-s-w-start',
    ]);
  }
  goToFIFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-fi-w-start',
    ]);
  }
}
