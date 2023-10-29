import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-t-fi-w-start',
  templateUrl: './p-t-fi-w-start.component.html',
  styleUrls: ['./p-t-fi-w-start.component.css'],
})
export class PTFiWStartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMCFFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-fi-w-start/t-fi-w-beginn',
    ]);
  }
}
