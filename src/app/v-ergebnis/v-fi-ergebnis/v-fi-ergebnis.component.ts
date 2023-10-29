import { Component, OnInit } from '@angular/core';
import { Fifragen } from 'src/app/shared/fifragen/fifragen';
import { FifragenService } from 'src/app/shared/fifragen/fifragen.service';

@Component({
  selector: 'app-v-fi-ergebnis',
  templateUrl: './v-fi-ergebnis.component.html',
  styleUrls: ['./v-fi-ergebnis.component.css']
})
export class VFiErgebnisComponent implements OnInit {
  fifragen: Fifragen[];
  ergebniss: any;
  richtigentwort: number;
  falscheantwort: number;
  hallo: boolean;
  halloo: boolean;
  bestand: string;
  Nbestand: string;

  constructor(private fif: FifragenService) { }

  ngOnInit(): void {
    this.fifragen = this.fif.getAllefifragen();
    this.richtigentwort = 0;
    this.falscheantwort = 0;
    this.richtgeantworten();
    //this.falscheantworten();
    this.bestand;
    this.Nbestand;
    this.bestanden();

  }
  bestanden() {
    if (this.richtigentwort > 7) {
      this.bestand = "Sie haben bestanden !";
    }
    else {
      this.Nbestand = "Sie haben nicht bestanden!";
    }
  }
  // richtgeantworten() {
  //   this.fifragen.map(a => a.fifantworten.filter(b => { if (b.antwortrichtig == true && b.antworteingabe == true) { this.richtigentwort++; } }));
  //   console.log(this.richtigentwort);
  // }

  richtgeantworten() {
    for (let a of this.fifragen) {
      for (let b of a.fifantworten) {
        if (b.gegebenetext != "") {
          if (b.gegebenetext == b.antworttext) {
            this.richtigentwort++;
          }
          else {
            this.falscheantwort++;
          }
        }
      }
    }
  }
}

