import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mcfragen } from 'src/app/shared/mcfragen/mcfragen';
import { McfragenService } from 'src/app/shared/mcfragen/mcfragen.service';

@Component({
  selector: 'app-mcffrage',
  templateUrl: './mcffrage.component.html',
  styleUrls: ['./mcffrage.component.css'],
})
export class MCFFrageComponent implements OnInit {
  mcfragen: Mcfragen[];
  mcfrage: Mcfragen;
  index: number;
  antwortenzeigen: boolean;
  zurucksitzen: boolean;
  falscheantwort: number;

  constructor(private router: Router, private mc: McfragenService) { }

  ngOnInit(): void {
    this.mcfragen = this.mc.getallemcfragen();
    this.index = 0;
    this.mcfrage = this.mcfragen[this.index];
    this.antwortenzeigen = false;

  }

  naechteFrage() {
    if (this.index < this.mcfragen.length - 1) {

      this.falscheantwort = 0;
      //this.falscheantworten();
      this.index++;
      this.mcfrage = this.mcfragen[this.index];
      this.antwortenzeigen = false;
      this.mcfrage.fmcantworten.map((a) => (a.antworteingabe = false));
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
  }

  goToergibns() {
    this.router.navigate([
      'prufung-lernen/lernmodus/fwlfrage/l-m-w-start/l-m-w-beginn/l-m-ergebnis',
    ]);
  }

  // falscheantworten() {

  //   for (let i = 0; i < 20; i++) {
  //     let halloo = false;
  //     for (let j = 0; j < 5; j++) {
  //       for (let g = 1; g < 5; g++) {
  //         if (j != g) {
  //           if (
  //             (((this.mcfragen[i].fmcantworten[j].antworteingabe == true) &&
  //               (this.mcfragen[i].fmcantworten[j].antwortrichtig == true)) &&
  //               ((this.mcfragen[i].fmcantworten[g].antworteingabe == true) &&
  //                 (this.mcfragen[i].fmcantworten[g].antwortrichtig == false)))
  //             ||
  //             (((this.mcfragen[i].fmcantworten[j].antworteingabe == true) &&
  //               (this.mcfragen[i].fmcantworten[j].antwortrichtig == true)) &&
  //               ((this.mcfragen[i].fmcantworten[g].antworteingabe == false) &&
  //                 (this.mcfragen[i].fmcantworten[g].antwortrichtig == false)))
  //             ||
  //             (((this.mcfragen[i].fmcantworten[j].antworteingabe == true) &&
  //               (this.mcfragen[i].fmcantworten[j].antwortrichtig == false)) &&
  //               ((this.mcfragen[i].fmcantworten[g].antworteingabe == false) &&
  //                 (this.mcfragen[i].fmcantworten[g].antwortrichtig == false)))
  //             ||
  //             (((this.mcfragen[i].fmcantworten[j].antworteingabe == true) &&
  //               (this.mcfragen[i].fmcantworten[j].antwortrichtig == false)) &&
  //               ((this.mcfragen[i].fmcantworten[g].antworteingabe == true) &&
  //                 (this.mcfragen[i].fmcantworten[g].antwortrichtig == false)))

  //           ) {
  //             this.falscheantwort++;
  //             halloo = true;
  //             console.log('i fragenr : ', i);
  //             console.log('j antwortnr : ', j);
  //             console.log('g uberprufnr : ', g);

  //           }
  //         }
  //         if (halloo) {
  //           console.log("g break");
  //           break;
  //         }
  //       }
  //       if (halloo) {
  //         console.log("j break");
  //         break;
  //       }
  //     }
  //   }
  // }
}
