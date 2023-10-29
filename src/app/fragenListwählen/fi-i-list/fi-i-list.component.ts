import { Component, OnInit } from '@angular/core';
import { Fifragen } from 'src/app/shared/fifragen/fifragen';
import { FifragenService } from 'src/app/shared/fifragen/fifragen.service';
@Component({
  selector: 'app-fi-i-list',
  templateUrl: './fi-i-list.component.html',
  styleUrls: ['./fi-i-list.component.css']
})

export class FiIListComponent implements OnInit {

  fifragen: Fifragen[];
  fifrage: Fifragen;
  lernFNr: number;
  antwortenzeigen: boolean;
  constructor(
    private fi: FifragenService
  ) { }

  ngOnInit(): void {
    this.fifragen = this.fi.getAllefifragen();
    this.antwortenzeigen = false;
    this.lernFNr = -1;

  }
  antwortAnzeigen(fmcnr: number) {
    if (this.lernFNr != fmcnr) {
      this.lernFNr = fmcnr;
      this.antwortenzeigen = true;
    } else {
      this.antwortenzeigen = !this.antwortenzeigen;
    }


  }

}
