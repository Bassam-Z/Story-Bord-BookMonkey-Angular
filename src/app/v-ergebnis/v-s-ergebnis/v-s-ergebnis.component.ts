import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scfragen } from 'src/app/shared/scfragen/scfragen';
import { ScfragenService } from 'src/app/shared/scfragen/scfragen.service';

@Component({
  selector: 'app-v-s-ergebnis',
  templateUrl: './v-s-ergebnis.component.html',
  styleUrls: ['./v-s-ergebnis.component.css']
})

export class VSErgebnisComponent implements OnInit {

  scfragen: Scfragen[];
  ergebniss: any;
  richtigentwort: number;
  falscheantwort: number;
  hallo: boolean;
  halloo: boolean;
  bestand: string;
  Nbestand: string;

  constructor(private router: Router, private sc: ScfragenService) { }

  ngOnInit(): void {
    this.scfragen = this.sc.getallescfragen();
    this.richtigentwort = 0;
    this.falscheantwort = 0;
    this.richtgeantworten();
    this.bestand;
    this.Nbestand;
    this.bestanden();

  }
  // goToergibns() {
  //   this.router.navigate([
  //     'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-s-w-start/v-s-w-beginn/v-s-ergebnis',
  //   ]);
  // }
  bestanden() {
    if (this.richtigentwort < 13) {
      console.log(this.Nbestand);

    }
    else {
      console.log(this.bestand);

    }
  }

  richtgeantworten() {
    this.scfragen.map(a => a.fscantworten.filter(b => { if (b.antwortrichtig == true && b.antworteingabe == true) { this.richtigentwort++; } }));
    console.log(this.richtigentwort);



  }
}








