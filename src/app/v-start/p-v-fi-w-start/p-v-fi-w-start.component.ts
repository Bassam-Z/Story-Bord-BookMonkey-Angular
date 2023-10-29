import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-v-fi-w-start',
  templateUrl: './p-v-fi-w-start.component.html',
  styleUrls: ['./p-v-fi-w-start.component.css'],
})
export class PVFiWStartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMCFFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-fi-w-start/v-fi-w-beginn',
    ]);
  }
}
