import { Component, OnInit } from '@angular/core';
import { Mcfragen } from 'src/app/shared/mcfragen/mcfragen';
import { McfragenService } from 'src/app/shared/mcfragen/mcfragen.service';

@Component({
  selector: 'app-m-c-list',
  templateUrl: './m-c-list.component.html',
  styleUrls: ['./m-c-list.component.css']
})
export class MCListComponent implements OnInit {

  mcfragen: Mcfragen[];
  mcfrage: Mcfragen;
  antwortenzeigen: boolean;
  lernFNr: number;

  constructor(
    private mc: McfragenService
  ) { }

  ngOnInit(): void {
    this.mcfragen = this.mc.getallemcfragen();
    this.antwortenzeigen = false;
    this.lernFNr = -1;

  }
  antwortanzeigen(fmcnr: number) {
    if (this.lernFNr != fmcnr) {
      this.lernFNr = fmcnr;
      this.antwortenzeigen = true;
    } else {
      this.antwortenzeigen = !this.antwortenzeigen;
    }


  }

}
