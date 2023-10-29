import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { PrufmodusComponent } from './prufmodus/prufmodus.component';
import { TPmodusComponent } from './f-w-l-modus/tpmodus.component';
import { MCFrageComponent } from './l-start/l-m-w-start/mcfrage.component';
import { SFrageComponent } from './sfrage/sfrage.component';
import { MCFFrageComponent } from './l-beginnmenue/l-m-w-beginn/mcffrage.component';
import { ErgibnsComponent } from './l-ergebnis/l-m-ergebnis/ergibns.component';
import { MCTVFrageComponent } from './f-w-p-t-frage/m-c-t-v-frage.component';
import { MCVFrageComponent } from './f-w-p-v-frage/m-c-v-frage.component';
import { LSWStartComponent } from './l-start/l-s-w-start/l-s-w-start.component';
import { LFiWStartComponent } from './l-start/l-fi-w-start/l-fi-w-start.component';
import { PTFiWStartComponent } from './t-start/p-t-fi-w-start/p-t-fi-w-start.component';
import { PTSWStartComponent } from './t-start/p-t-s-w-start/p-t-s-w-start.component';
import { PTMWStartComponent } from './t-start/p-t-m-w-start/p-t-m-w-start.component';
import { PVFiWStartComponent } from './v-start/p-v-fi-w-start/p-v-fi-w-start.component';
import { PVSWStartComponent } from './v-start/p-v-s-w-start/p-v-s-w-start.component';
import { PVMWStartComponent } from './v-start/p-v-m-w-start/p-v-m-w-start.component';
import { LSWBeginnComponent } from './l-beginnmenue/l-s-w-beginn/l-s-w-beginn.component';
import { LFiWBeginnComponent } from './l-beginnmenue/l-fi-w-beginn/l-fi-w-beginn.component';
import { TFiWBeginnComponent } from './t-beginnmenue/t-fi-w-beginn/t-fi-w-beginn.component';
import { TMWBeginnComponent } from './t-beginnmenue/t-m-w-beginn/t-m-w-beginn.component';
import { TSWBeginnComponent } from './t-beginnmenue/t-s-w-beginn/t-s-w-beginn.component';
import { VFiWBeginnComponent } from './v-beginnmenue/v-fi-w-beginn/v-fi-w-beginn.component';
import { VSWBeginnComponent } from './v-beginnmenue/v-s-w-beginn/v-s-w-beginn.component';
import { VMWBeginnComponent } from './v-beginnmenue/v-m-w-beginn/v-m-w-beginn.component';
import { LSErgebnisComponent } from './l-ergebnis/l-s-ergebnis/l-s-ergebnis.component';
import { LFiErgebnisComponent } from './l-ergebnis/l-fi-ergebnis/l-fi-ergebnis.component';
import { TFiErgebnisComponent } from './t-ergebnis/t-fi-ergebnis/t-fi-ergebnis.component';
import { TSErgebnisComponent } from './t-ergebnis/t-s-ergebnis/t-s-ergebnis.component';
import { TMErgebnisComponent } from './t-ergebnis/t-m-ergebnis/t-m-ergebnis.component';
import { VMErgebnisComponent } from './v-ergebnis/v-m-ergebnis/v-m-ergebnis.component';

import { VFiErgebnisComponent } from './v-ergebnis/v-fi-ergebnis/v-fi-ergebnis.component';
import { VSErgebnisComponent } from './v-ergebnis/v-s-ergebnis/v-s-ergebnis.component';
import { FragenlisteComponent } from './fragenListwählen/fragenliste/fragenliste.component';
import { MCListComponent } from './fragenListwählen/m-c-list/m-c-list.component';
import { SCListComponent } from './fragenListwählen/s-c-list/s-c-list.component';
import { FiIListComponent } from './fragenListwählen/fi-i-list/fi-i-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MCListComponent,
    PrufmodusComponent,
    TPmodusComponent,
    SCListComponent,
    MCFrageComponent,
    SFrageComponent,
    MCFFrageComponent,
    ErgibnsComponent,
    MCTVFrageComponent,
    MCVFrageComponent,
    LSWStartComponent,
    LFiWStartComponent,
    PTFiWStartComponent,
    PTSWStartComponent,
    PTMWStartComponent,
    PVFiWStartComponent,
    PVSWStartComponent,
    PVMWStartComponent,
    LSWBeginnComponent,
    LFiWBeginnComponent,
    TFiWBeginnComponent,
    TMWBeginnComponent,
    TSWBeginnComponent,
    VFiWBeginnComponent,
    VSWBeginnComponent,
    VMWBeginnComponent,
    LSErgebnisComponent,
    LFiErgebnisComponent,
    TFiErgebnisComponent,
    TSErgebnisComponent,
    TMErgebnisComponent,
    VMErgebnisComponent,
    FiIListComponent,
    VFiErgebnisComponent,

    VSErgebnisComponent,

    FragenlisteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
