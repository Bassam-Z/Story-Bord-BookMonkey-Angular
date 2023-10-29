import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcfrage',
  templateUrl: './mcfrage.component.html',
  styleUrls: ['./mcfrage.component.css'],
})
export class MCFrageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMCFFrage() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage/l-m-w-start/l-m-w-beginn',
    ]);
  }
}
