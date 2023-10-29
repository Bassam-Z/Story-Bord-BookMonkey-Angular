import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-c-t-v-frage',
  templateUrl: './m-c-t-v-frage.component.html',
  styleUrls: ['./m-c-t-v-frage.component.css'],
})
export class MCTVFrageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToMCFrage() {
    this.router.navigate([
      '/prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-m-w-start',
    ]);
  }
  goToSFrage() {
    this.router.navigate([
      '/prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-s-w-start',
    ]);
  }
  goToFIFrage() {
    this.router.navigate([
      '/prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-fi-w-start',
    ]);
  }
}
