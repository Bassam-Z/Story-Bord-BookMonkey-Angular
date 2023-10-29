import { Component, OnInit } from '@angular/core';
import { Scfragen } from 'src/app/shared/scfragen/scfragen';
import { ScfragenService } from 'src/app/shared/scfragen/scfragen.service';

@Component({
  selector: 'app-s-c-list',
  templateUrl: './s-c-list.component.html',
  styleUrls: ['./s-c-list.component.css']
})

export class SCListComponent implements OnInit {
  scfragen: Scfragen[];
  scfrage: Scfragen;
  lernFNr: number;
  antwortenzeigen: boolean;
  constructor(
    private sc: ScfragenService
  ) { }

  ngOnInit(): void {
    this.scfragen = this.sc.getallescfragen();
    this.antwortenzeigen = false;
    this.lernFNr = -1;

  }
  antwortanzeigen(fscnr: number) {
    if (this.lernFNr != fscnr) {
      this.lernFNr = fscnr;
      this.antwortenzeigen = true;
    } else {
      this.antwortenzeigen = !this.antwortenzeigen;
    }


  }
}

