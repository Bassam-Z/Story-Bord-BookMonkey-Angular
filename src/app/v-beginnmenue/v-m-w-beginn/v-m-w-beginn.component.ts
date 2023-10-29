import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mcfragen } from 'src/app/shared/mcfragen/mcfragen';

import { McfragenService } from 'src/app/shared/mcfragen/mcfragen.service';

@Component({
  selector: 'app-v-m-w-beginn',
  templateUrl: './v-m-w-beginn.component.html',
  styleUrls: ['./v-m-w-beginn.component.css'],
})
export class VMWBeginnComponent implements OnInit {
  mcfragen: Mcfragen[];
  mcfrage: Mcfragen;
  ergebniss: any;
  index: number;
  antwortenzeigen: boolean;
  zurucksitzen: boolean;
  falscheantwort: number;
  rictigeantwort: number;
  richtigentwort: number;
  falschantwort: number;
  hallo: boolean;
  halloo: boolean;
  bestand: string;
  Nbestand: string;


  constructor(private router: Router, private mc: McfragenService) { }


  ngOnInit(): void {
    this.mcfragen = this.mc.getallemcfragen();
    this.index = 0;
    this.mcfrage = this.mcfragen[this.index];
    this.antwortenzeigen = false;
    this.falscheantwort = 0;
    this.richtigentwort = 0;
    this.richtgeantworten();
    this.bestand;
    this.Nbestand;
    this.bestanden();
  }

  goToergibns() {
    this.router.navigate([
      'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-m-w-start/v-m-w-beginn/v-m-ergebnis',
    ]);
  }
  goTolernmudus() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage',
    ]);
  }

  naechteFrage() {
    if (this.index < this.mcfragen.length - 1) {

      this.rictigeantwort = 0;
      this.falscheantwort = 0;
      this.controle();
      this.index++;
      this.mcfrage = this.mcfragen[this.index];
      this.antwortenzeigen = false;

    }
    console.log(this.rictigeantwort);
    console.log(this.falscheantwort);
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

    }
  }


  antwortAnzeigen() {
    this.antwortenzeigen = !this.antwortenzeigen;
  }

  checkBox(antworvalue: number): void {
    this.mcfrage.fmcantworten[antworvalue].antworteingabe =
      !this.mcfrage.fmcantworten[antworvalue].antworteingabe;
  }

  controle() {
    var anzahlRichtig = 0;
    var anzahlFalsch = 0;
    var anzahlNicht = 0;

    for (let fr of this.mcfragen) {
      var beantwortet = false;
      var allerichtig = true

      for (let antw of fr.fmcantworten) {
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

  bestanden() {
    if (this.richtigentwort > 13) {
      this.bestand = "Sie haben bestanden !";
    }
    else {
      this.Nbestand = "Sie haben nicht bestanden!";
    }
  }
  richtgeantworten() {
    for (let i = 0; i < 20; i++) {
      this.hallo = false;
      for (let j = 0; j < 5; j++) {
        for (let g = 0; g < 5; g++) {
          if (j != g) {
            if (
              this.mcfragen[i].fmcantworten[j].antworteingabe == true &&
              this.mcfragen[i].fmcantworten[j].antwortrichtig == true &&
              this.mcfragen[i].fmcantworten[g].antworteingabe == true &&
              this.mcfragen[i].fmcantworten[g].antwortrichtig == true
            ) {
              this.richtigentwort++;
              this.hallo = true;
              console.log('i gRichtig : ' + i);
              console.log('j gRichtig : ' + j);
              console.log('g gRichtig : ' + g);
            }
          }
        }
        if (this.hallo) {
          this.hallo = true;
          break;
        }
      }
    }
  }


  /*
  For()
  allerichtig =true;
  For(){
  gegebene != korrekt{!allerichtig}
  if(gegebene){
    if(!korrekt || korrekt){falsch++}
  }
  }
  if(allerichtig){++}

  gegebene    korrekt
    false  ==  false
    false   ==  true
    false  ==  fasle
    true   ==  true
  */


}

