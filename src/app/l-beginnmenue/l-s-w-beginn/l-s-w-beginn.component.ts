import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scfragen } from 'src/app/shared/scfragen/scfragen';
import { ScfragenService } from 'src/app/shared/scfragen/scfragen.service';

@Component({
  selector: 'app-l-s-w-beginn',
  templateUrl: './l-s-w-beginn.component.html',
  styleUrls: ['./l-s-w-beginn.component.css'],
})
export class LSWBeginnComponent implements OnInit {
  scfragen: Scfragen[];
  scfrage: Scfragen;
  index: number;
  antwortenzeigen: boolean;
  zurucksitzen: boolean;
  falscheantwort: number;

  constructor(private router: Router, private sc: ScfragenService) { }


  ngOnInit(): void {
    this.scfragen = this.sc.getallescfragen();
    this.index = 0;
    this.scfrage = this.scfragen[this.index];
    this.antwortenzeigen = false;


  }

  goToergibns() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage/l-s-w-start/l-s-w-beginn/l-s-ergebnis',
    ]);
  }

  naechteFrage() {
    if (this.index < this.scfragen.length - 1) {

      this.falscheantwort = 0;
      this.falscheantworten();
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

  falscheantworten() {

    for (let i = 0; i < 20; i++) {
      let halloo = false;
      for (let j = 0; j < 5; j++) {
        for (let g = 1; g < 5; g++) {
          if (j != g) {
            if (
              (((this.scfragen[i].fscantworten[j].antworteingabe == true) &&
                (this.scfragen[i].fscantworten[j].antwortrichtig == true)) &&
                ((this.scfragen[i].fscantworten[g].antworteingabe == true) &&
                  (this.scfragen[i].fscantworten[g].antwortrichtig == false)))
              ||
              (((this.scfragen[i].fscantworten[j].antworteingabe == true) &&
                (this.scfragen[i].fscantworten[j].antwortrichtig == true)) &&
                ((this.scfragen[i].fscantworten[g].antworteingabe == false) &&
                  (this.scfragen[i].fscantworten[g].antwortrichtig == false)))
              ||
              (((this.scfragen[i].fscantworten[j].antworteingabe == true) &&
                (this.scfragen[i].fscantworten[j].antwortrichtig == false)) &&
                ((this.scfragen[i].fscantworten[g].antworteingabe == false) &&
                  (this.scfragen[i].fscantworten[g].antwortrichtig == false)))
              ||
              (((this.scfragen[i].fscantworten[j].antworteingabe == true) &&
                (this.scfragen[i].fscantworten[j].antwortrichtig == false)) &&
                ((this.scfragen[i].fscantworten[g].antworteingabe == true) &&
                  (this.scfragen[i].fscantworten[g].antwortrichtig == false)))

            ) {
              this.falscheantwort++;
              halloo = true;
              console.log('i fragenr : ', i);
              console.log('j antwortnr : ', j);
              console.log('g uberprufnr : ', g);

            }
          }
          if (halloo) {
            console.log("g break");
            break;
          }
        }
        if (halloo) {
          console.log("j break");
          break;
        }
      }
    }
  }
}
