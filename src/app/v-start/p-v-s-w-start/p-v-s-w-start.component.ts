import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-v-s-w-start',
  templateUrl: './p-v-s-w-start.component.html',
  styleUrls: ['./p-v-s-w-start.component.css'],
})
export class PVSWStartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMCFFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-s-w-start/v-s-w-beginn',
    ]);
  }
}
