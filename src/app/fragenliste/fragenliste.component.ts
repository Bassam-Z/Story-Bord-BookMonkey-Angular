import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fragenliste',
  templateUrl: './fragenliste.component.html',
  styleUrls: ['./fragenliste.component.css'],
})
export class FragenlisteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goTofragenlist() {
    this.router.navigate(['/fragenlist']);
  }
}
