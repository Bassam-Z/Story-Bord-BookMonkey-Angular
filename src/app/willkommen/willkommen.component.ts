import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-willkommen',
  templateUrl: './willkommen.component.html',
  styleUrls: ['./willkommen.component.css'],
})
export class WillkommenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
