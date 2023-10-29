import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-t-m-w-start',
  templateUrl: './p-t-m-w-start.component.html',
  styleUrls: ['./p-t-m-w-start.component.css'],
})
export class PTMWStartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMCFFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-m-w-start/t-m-w-beginn',
    ]);
  }
}
