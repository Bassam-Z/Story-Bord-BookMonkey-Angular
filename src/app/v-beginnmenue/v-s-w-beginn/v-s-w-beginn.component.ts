import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scfragen } from 'src/app/shared/scfragen/scfragen';
import { ScfragenService } from 'src/app/shared/scfragen/scfragen.service';

@Component({
  selector: 'app-v-s-w-beginn',
  templateUrl: './v-s-w-beginn.component.html',
  styleUrls: ['./v-s-w-beginn.component.css'],
})
export class VSWBeginnComponent implements OnInit {
  scfragen: Scfragen[];
  scfrage: Scfragen;
  index: number;
  antwortenzeigen: boolean;
  zurucksitzen: boolean;
  falscheantwort: number;
  rictigeantwort: number;
  hallo: boolean;
  halloo: boolean;
  bestand: string;
  Nbestand: string;


  constructor(private router: Router, private sc: ScfragenService) { }


  ngOnInit(): void {
    this.scfragen = this.sc.getallescfragen();
    this.index = 0;
    this.scfrage = this.scfragen[this.index];
    this.antwortenzeigen = false;
    this.rictigeantwort = 0;
    this.falscheantwort = 0;
    this.bestand;
    this.Nbestand;
    this.bestanden();



  }

  goToergibns() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-s-w-start/v-s-w-beginn/v-s-ergebnis',
    ]);
  }
  goTolernmudus() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage',
    ]);
  }

  naechteFrage() {
    if (this.index < this.scfragen.length - 1) {
      this.rictigeantwort = 0;
      this.falscheantwort = 0;
      this.controle();
      this.index++;
      this.scfrage = this.scfragen[this.index];
      this.antwortenzeigen = false;
      this.scfrage.fscantworten.map((a) => (a.antworteingabe = false));
    }
  }

  zurucksetzen() {
    this.scfrage.fscantworten.map((a) => (a.antworteingabe = false));
    this.antwortenzeigen = false;
  }

  bestanden() {
    if (this.rictigeantwort > 13) {
      this.bestand = "Sie haben bestanden !";
    }
    else {
      this.Nbestand = "Sie haben nicht bestanden!";
    }
  }

  vorhegendeFrage() {
    if (this.index > 0) {
      this.index--;
      this.scfrage = this.scfragen[this.index];
      this.antwortenzeigen = false;
      this.scfrage.fscantworten.map((a) => (a.antworteingabe = false));
    }
  }


  antwortAnzeigen() {
    this.antwortenzeigen = !this.antwortenzeigen;
  }

  checkBox(antworvalue: number): void {
    this.scfrage.fscantworten[antworvalue].antworteingabe =
      !this.scfrage.fscantworten[antworvalue].antworteingabe;
  }

  controle() {
    var anzahlRichtig = 0;
    var anzahlFalsch = 0;
    var anzahlNicht = 0;

    for (let fr of this.scfragen) {
      var beantwortet = false;
      var allerichtig = true

      for (let antw of fr.fscantworten) {
        if (antw.antwortrichtig != antw.antworteingabe) {
          allerichtig = false;
        }

        if (antw.antworteingabe) {
          beantwortet = true;
        }

      }
      if (allerichtig) {
        this.rictigeantwort++;
      }
      if (!beantwortet) {
        anzahlNicht++;
      }
      if (beantwortet && !allerichtig) {
        anzahlFalsch++;
      }

    }
    this.falscheantwort = this.index + 1 - this.rictigeantwort;

  }

}
