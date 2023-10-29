import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fifragen } from 'src/app/shared/fifragen/fifragen';
import { FifragenService } from 'src/app/shared/fifragen/fifragen.service';

@Component({
  selector: 'app-l-fi-w-beginn',
  templateUrl: './l-fi-w-beginn.component.html',
  styleUrls: ['./l-fi-w-beginn.component.css'],
})
export class LFiWBeginnComponent implements OnInit {
  fifragen: Fifragen[];
  fifrage: Fifragen;
  index: number;
  antwortenzeigen: boolean;
  zurucksitzen: boolean;
  falscheantwort: number;
  input: string;
  keyinput: boolean;
  richtigantwort: boolean;
  constructor(private router: Router, private fif: FifragenService) { }

  ngOnInit(): void {
    this.fifragen = this.fif.getAllefifragen();
    this.index = 0;
    this.fifrage = this.fifragen[this.index];
    this.antwortenzeigen = false;
    this.input = "";
    this.keyinput = false;
    this.richtigantwort = false;


  }
  goToergibns() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage/l-fi-w-start/l-fi-w-beginn/l-fi-ergebnis',
    ]);
  }

  naechteFrage() {
    if (this.index < this.fifragen.length - 1) {

      // this.falscheantwort = 0;
      // this.falscheantworten();
      this.index++;
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

  checkInput(antworvalue: string): void {
    //this.antwortenzeigen = false;
    this.fifrage.fifantworten[0].gegebenetext = antworvalue;
    if (antworvalue.length > 0) {
      this.keyinput = true;
      if (this.fifrage.fifantworten[0].antworttext == antworvalue) {
        this.fifrage.fifantworten[0].antwortrichtig = true;
        this.richtigantwort = true;
        this.input = antworvalue;
        //this.antwortenzeigen = true;
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
    // console.log("Die Eingabe: ", antworvalue, "Die Richtige Antwort", this.fifrage.fifantworten[0].antworttext);
  }

  falscheantworten() {

    for (let i = 0; i < 20; i++) {
      let halloo = false;
      for (let j = 0; j < 5; j++) {
        for (let g = 1; g < 5; g++) {
          if (j != g) {
            if (
              (((this.fifragen[i].fifantworten[j].antworteingabe == true) &&
                (this.fifragen[i].fifantworten[j].antwortrichtig == true)) &&
                ((this.fifragen[i].fifantworten[g].antworteingabe == true) &&
                  (this.fifragen[i].fifantworten[g].antwortrichtig == false)))
              ||
              (((this.fifragen[i].fifantworten[j].antworteingabe == true) &&
                (this.fifragen[i].fifantworten[j].antwortrichtig == true)) &&
                ((this.fifragen[i].fifantworten[g].antworteingabe == false) &&
                  (this.fifragen[i].fifantworten[g].antwortrichtig == false)))
              ||
              (((this.fifragen[i].fifantworten[j].antworteingabe == true) &&
                (this.fifragen[i].fifantworten[j].antwortrichtig == false)) &&
                ((this.fifragen[i].fifantworten[g].antworteingabe == false) &&
                  (this.fifragen[i].fifantworten[g].antwortrichtig == false)))
              ||
              (((this.fifragen[i].fifantworten[j].antworteingabe == true) &&
                (this.fifragen[i].fifantworten[j].antwortrichtig == false)) &&
                ((this.fifragen[i].fifantworten[g].antworteingabe == true) &&
                  (this.fifragen[i].fifantworten[g].antwortrichtig == false)))

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

