import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mcfragen } from 'src/app/shared/mcfragen/mcfragen';
import { MCFrageComponent } from 'src/app/l-start/l-m-w-start/mcfrage.component';
import { McfragenService } from 'src/app/shared/mcfragen/mcfragen.service';
@Component({
  selector: 'app-t-m-w-beginn',
  templateUrl: './t-m-w-beginn.component.html',
  styleUrls: ['./t-m-w-beginn.component.css'],
})
export class TMWBeginnComponent implements OnInit {
  mcfragen: Mcfragen[];
  mcfrage: Mcfragen;
  index: number;
  antwortenzeigen: boolean;
  zurucksitzen: boolean;
  falscheantwort: number;
  letztefrage:boolean;
  allesrichtig: boolean;
  ergebnispartcheck:boolean;
  anzahlRichtig : number;
  anzahlFalsch : number;
  anzahlNicht : number;

  constructor(private router: Router, private mc: McfragenService) { }


  ngOnInit(): void {
    this.mcfragen = this.mc.getallemcfragen();
    this.index = 0;
    this.mcfrage = this.mcfragen[this.index];
    this.antwortenzeigen = false;
    this.letztefrage = false;
    this.allesrichtig = true;
    this.ergebnispartcheck = true;
    this.anzahlRichtig = 0;
    this.anzahlFalsch = 0;
    this.anzahlNicht = 0;
    this.mcfrage.fmcantworten.map((a) => (a.antworteingabe = false));

  }

  goToergibns() {
    this.router.navigate([
      'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-m-w-start/t-m-w-beginn/t-m-ergebnis',
    ]);
  }

  naechteFrage() {

    if (this.index < this.mcfragen.length - 1) {
      this.falscheantwort = 0;

      this.controle();
      this.index++;
      this.mcfrage = this.mcfragen[this.index];
      this.antwortenzeigen = false;
    }

  }

  zurucksetzen() {
    this.mcfrage.fmcantworten.map((a) => (a.antworteingabe = false));
    this.antwortenzeigen = false;
  }


  vorhegendeFrage() {
    if (this.index > 0) {
      this.index--;
      this.mcfrage = this.mcfragen[this.index];
      this.antwortenzeigen = false;
      this.mcfrage.fmcantworten.map((a) => (a.antworteingabe = false));
    }
  }


  antwortAnzeigen() {
    this.antwortenzeigen = !this.antwortenzeigen;
  }

  checkBox(antworvalue: number): void {
    this.mcfrage.fmcantworten[antworvalue].antworteingabe =
      !this.mcfrage.fmcantworten[antworvalue].antworteingabe;
      this.allesrichtig = true;
  }
  /* ergebnisPartCheck() {
    this.ergebnispartcheck = true;
    this.anzahlRichtig = 0;
    this.anzahlFalsch = 0;
    this.anzahlNicht = 0;
    for (let fr of this.mcfragen) {
      var nichtbeantwortet = true;
      var allesrichtig = true;
      for (let antw of fr.fmcantworten) {
        if (antw.antwortrichtig != antw.antworteingabe) {
          allesrichtig = false;
        }
        if (antw.antworteingabe) {
          nichtbeantwortet = false;
        }
      }
      if (allesrichtig) this.anzahlRichtig++;
      if (nichtbeantwortet) this.anzahlNicht++;
      if (!nichtbeantwortet && !allesrichtig) this.anzahlFalsch++;
    }

  } */
  controle() {
    var anzahlFalsch = 0;
    var anzahlNicht = 0;

    for (let fr of this.mcfragen) {
      var beantwortet = false;
      var allerichtig = true

      for (let antw of fr.fmcantworten) {
        if (antw.antwortrichtig != antw.antworteingabe) {
          allerichtig = false;
        }
      }

      if (!beantwortet) {
        anzahlNicht++;
      }
      if (beantwortet && !allerichtig) {
        anzahlFalsch++;
        allerichtig = false;
      }

    }

  }

}


