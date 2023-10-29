import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prufmodus',
  templateUrl: './prufmodus.component.html',
  styleUrls: ['./prufmodus.component.css'],
})
export class PrufmodusComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToTeilPrufungModus() {
    this.router.navigate([
      '/prufung-lernen/prufmodus/teil-prufmodus/fwptfrage',
    ]);
  }
  goTovollPrufungModus() {
    this.router.navigate([
      '/prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage',
    ]);
  }
}
