import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tpmodus',
  templateUrl: './tpmodus.component.html',
  styleUrls: ['./tpmodus.component.css'],
})
export class TPmodusComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToMCFrage() {
    this.router.navigate(['/prufung-lernen/lernmodus/fwlfrage/l-m-w-start']);
  }
  goToSFrage() {
    this.router.navigate(['/prufung-lernen/lernmodus/fwlfrage/l-s-w-start']);
  }
  goToFIFrage() {
    this.router.navigate(['/prufung-lernen/lernmodus/fwlfrage/l-fi-w-start']);
  }
}
