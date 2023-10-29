import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fifragen } from 'src/app/shared/fifragen/fifragen';
import { FifragenService } from 'src/app/shared/fifragen/fifragen.service';


@Component({
  selector: 'app-v-fi-w-beginn',
  templateUrl: './v-fi-w-beginn.component.html',
  styleUrls: ['./v-fi-w-beginn.component.css'],
})

export class VFiWBeginnComponent implements OnInit {
  fifragen: Fifragen[];
  fifrage: Fifragen;
  index: number;
  antwortenzeigen: boolean;
  zurucksitzen: boolean;
  falscheantwort: number;
  input: string;
  keyinput: boolean;
  richtigantwort: boolean;
  rictigeantwort: number;
  //richtigentwort: number;
  falschantwort: number;
  hallo: boolean;
  halloo: boolean;
  bestand: string;
  Nbestand: string;


  constructor(private router: Router, private fif: FifragenService) { }

  ngOnInit(): void {
    this.fifragen = this.fif.getAllefifragen();
    this.index = 0;
    this.fifrage = this.fifragen[this.index];
    this.antwortenzeigen = false;
    this.input = "";
    this.keyinput = false;
    this.richtigantwort = false;
    this.falscheantwort = 0;
    this.rictigeantwort = 0;
    this.bestand;
    this.Nbestand;
    this.bestanden();


  }
  goToergibns() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-fi-w-start/v-fi-w-beginn/v-fi-ergebnis',
    ]);
  }
  goTolernmudus() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage',
    ]);
  }

  naechteFrage() {
    if (this.index < this.fifragen.length - 1) {
      this.index++;
      this.controle();
      this.fifrage = this.fifragen[this.index];
      this.antwortenzeigen = false;
      this.keyinput = false;
      this.fifrage.fifantworten.map((a) => (a.antworteingabe = false));
      this.input = '';


    }
  }

  zurucksetzen() {
    this.keyinput = false;

    this.antwortenzeigen = false;
    this.input = "";
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
      this.fifrage = this.fifragen[this.index];
      this.antwortenzeigen = false;
      this.fifrage.fifantworten.map((a) => (a.antworteingabe = false));
      this.input = "";
    }
  }


  antwortAnzeigen() {
    this.antwortenzeigen = !this.antwortenzeigen;
  }

  /* checkInput(antworvalue: string): void {

    this.fifrage.fifantworten[0].gegebenetext = antworvalue;
    if (antworvalue.length > 0) {
      this.keyinput = true;
      if (this.fifrage.fifantworten[0].antworttext == antworvalue) {
        this.fifrage.fifantworten[0].antwortrichtig = true;
        this.richtigantwort = true;
        this.input = antworvalue;

      }
      else {
        this.fifrage.fifantworten[0].antwortrichtig = false;
        this.input = antworvalue;
        this.richtigantwort = false;
      }
    } else {
      this.fifrage.fifantworten[0].antwortrichtig = false;
      this.keyinput = false;
    }

  } */
  checkInput(antworvalue: string): void {

    this.fifrage.fifantworten[0].gegebenetext = antworvalue;
    if (antworvalue ! = '' ) {
      this.fifrage.fifantworten[0].antworteingabe = true;
      if (this.fifrage.fifantworten[0].antworttext == this.fifrage.fifantworten[0].gegebenetext) {
        this.fifrage.fifantworten[0].antwortrichtig = true;
      }
      if (this.fifrage.fifantworten[0].antworttext != this.fifrage.fifantworten[0].gegebenetext){
        this.fifrage.fifantworten[0].antwortrichtig = false;
      }
    } else {
      this.fifrage.fifantworten[0].antwortrichtig = false;
    }

  }

  controle() {
    var anzahlFalsch = 0;
    var anzahlNicht = 0;

    for (let fr of this.fifragen) {
      var beantwortet = false;
      var allerichtig = true

      for (let antw of fr.fifantworten) {
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


