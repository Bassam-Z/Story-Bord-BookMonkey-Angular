import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l-s-w-start',
  templateUrl: './l-s-w-start.component.html',
  styleUrls: ['./l-s-w-start.component.css'],
})
export class LSWStartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoscFrage() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage/l-s-w-start/l-s-w-beginn',
    ]);
  }
}
