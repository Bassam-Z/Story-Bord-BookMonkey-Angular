import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l-fi-w-start',
  templateUrl: './l-fi-w-start.component.html',
  styleUrls: ['./l-fi-w-start.component.css'],
})
export class LFiWStartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMCFFrage() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage/l-fi-w-start/l-fi-w-beginn',
    ]);
  }
}
