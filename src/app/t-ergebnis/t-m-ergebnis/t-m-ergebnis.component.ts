import { Component, OnInit } from '@angular/core';
import { Mcfragen } from 'src/app/shared/mcfragen/mcfragen';
import { McfragenService } from 'src/app/shared/mcfragen/mcfragen.service';

@Component({
  selector: 'app-t-m-ergebnis',
  templateUrl: './t-m-ergebnis.component.html',
  styleUrls: ['./t-m-ergebnis.component.css']
})
export class TMErgebnisComponent implements OnInit {
  mcfragen: Mcfragen[];
  ergebniss: any;
  richtigentwort: number;
  falscheantwort: number;
  hallo: boolean;
  halloo: boolean;
  bestand: string;
  Nbestand: string;

  constructor(private mc: McfragenService) { }

  ngOnInit(): void {
    this.mcfragen = this.mc.getallemcfragen();
    this.richtigentwort = 0;
    this.falscheantwort = 0;
    this.richtgeantworten();
    //this.falscheantworten();
    this.bestand;
    this.Nbestand;
    this.bestanden();

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
          //this.falscheantwort++
          this.hallo = true;
          break;
        }
        /* else if (this.hallo) {
          this.hallo = true;
          break;
        } */

      }

    }
  }
}
