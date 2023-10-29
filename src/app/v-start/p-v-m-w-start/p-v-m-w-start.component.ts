import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { McfragenService } from 'src/app/shared/mcfragen/mcfragen.service';
// import { Mcfragen } from 'src/app/shared/mcfragen/mcfragen';
@Component({
  selector: 'app-p-v-m-w-start',
  templateUrl: './p-v-m-w-start.component.html',
  styleUrls: ['./p-v-m-w-start.component.css'],
})
export class PVMWStartComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  gotoMCFFrage() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-m-w-start/v-m-w-beginn',
    ]);
  }
}
