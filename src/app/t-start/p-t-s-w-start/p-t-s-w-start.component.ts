import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-t-s-w-start',
  templateUrl: './p-t-s-w-start.component.html',
  styleUrls: ['./p-t-s-w-start.component.css'],
})
export class PTSWStartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMCFFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-s-w-start/t-s-w-beginn',
    ]);
  }
}
