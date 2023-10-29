import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErgibnsComponent } from './l-ergebnis/l-m-ergebnis/ergibns.component';
import { InfoComponent } from './info/info.component';
import { MCFFrageComponent } from './l-beginnmenue/l-m-w-beginn/mcffrage.component';
import { MCFrageComponent } from './l-start/l-m-w-start/mcfrage.component';
import { PrufmodusComponent } from './prufmodus/prufmodus.component';
import { PLComponent } from './prufung-Lernen/pl.component';
// import { SFrageComponent } from './sfrage/sfrage.component';
import { TPmodusComponent } from './f-w-l-modus/tpmodus.component';
import { WillkommenComponent } from './willkommen/willkommen.component';
import { MCVFrageComponent } from './f-w-p-v-frage/m-c-v-frage.component';
import { MCTVFrageComponent } from './f-w-p-t-frage/m-c-t-v-frage.component';
import { LSWStartComponent } from './l-start/l-s-w-start/l-s-w-start.component';
import { LFiWStartComponent } from './l-start/l-fi-w-start/l-fi-w-start.component';
import { PTMWStartComponent } from './t-start/p-t-m-w-start/p-t-m-w-start.component';
import { PTSWStartComponent } from './t-start/p-t-s-w-start/p-t-s-w-start.component';
import { PTFiWStartComponent } from './t-start/p-t-fi-w-start/p-t-fi-w-start.component';
import { PVMWStartComponent } from './v-start/p-v-m-w-start/p-v-m-w-start.component';
import { PVSWStartComponent } from './v-start/p-v-s-w-start/p-v-s-w-start.component';
import { PVFiWStartComponent } from './v-start/p-v-fi-w-start/p-v-fi-w-start.component';
import { LSWBeginnComponent } from './l-beginnmenue/l-s-w-beginn/l-s-w-beginn.component';
import { LFiWBeginnComponent } from './l-beginnmenue/l-fi-w-beginn/l-fi-w-beginn.component';
import { TSWBeginnComponent } from './t-beginnmenue/t-s-w-beginn/t-s-w-beginn.component';
import { TFiWBeginnComponent } from './t-beginnmenue/t-fi-w-beginn/t-fi-w-beginn.component';
import { TMWBeginnComponent } from './t-beginnmenue/t-m-w-beginn/t-m-w-beginn.component';
import { VFiWBeginnComponent } from './v-beginnmenue/v-fi-w-beginn/v-fi-w-beginn.component';
import { VMWBeginnComponent } from './v-beginnmenue/v-m-w-beginn/v-m-w-beginn.component';
import { VSWBeginnComponent } from './v-beginnmenue/v-s-w-beginn/v-s-w-beginn.component';
import { LFiErgebnisComponent } from './l-ergebnis/l-fi-ergebnis/l-fi-ergebnis.component';
import { LSErgebnisComponent } from './l-ergebnis/l-s-ergebnis/l-s-ergebnis.component';
import { TMErgebnisComponent } from './t-ergebnis/t-m-ergebnis/t-m-ergebnis.component';
import { TSErgebnisComponent } from './t-ergebnis/t-s-ergebnis/t-s-ergebnis.component';
import { TFiErgebnisComponent } from './t-ergebnis/t-fi-ergebnis/t-fi-ergebnis.component';
import { VMErgebnisComponent } from './v-ergebnis/v-m-ergebnis/v-m-ergebnis.component';
import { VSErgebnisComponent } from './v-ergebnis/v-s-ergebnis/v-s-ergebnis.component';
import { VFiErgebnisComponent } from './v-ergebnis/v-fi-ergebnis/v-fi-ergebnis.component';
import { FragenlisteComponent } from './fragenListwählen/fragenliste/fragenliste.component';
import { MCListComponent } from './fragenListwählen/m-c-list/m-c-list.component';
import { SCListComponent } from './fragenListwählen/s-c-list/s-c-list.component';
import { FiIListComponent } from './fragenListwählen/fi-i-list/fi-i-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WillkommenComponent },
  { path: 'prufung-lernen', component: PLComponent },
  {
    path: 'fragenlist',
    component: FragenlisteComponent,
  },
  { path: 'info', component: InfoComponent },

  { path: 'prufung-lernen/prufmodus', component: PrufmodusComponent },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage',
    component: TPmodusComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage',
    component: MCTVFrageComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage',
    component: MCVFrageComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-m-w-start',
    component: MCFrageComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-s-w-start',
    component: LSWStartComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-fi-w-start',
    component: LFiWStartComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-m-w-start',
    component: PTMWStartComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-s-w-start',
    component: PTSWStartComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-fi-w-start',
    component: PTFiWStartComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-m-w-start',
    component: PVMWStartComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-s-w-start',
    component: PVSWStartComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-fi-w-start',
    component: PVFiWStartComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-m-w-start/l-m-w-beginn',
    component: MCFFrageComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-s-w-start/l-s-w-beginn',
    component: LSWBeginnComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-fi-w-start/l-fi-w-beginn',
    component: LFiWBeginnComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-s-w-start/t-s-w-beginn',
    component: TSWBeginnComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-fi-w-start/t-fi-w-beginn',
    component: TFiWBeginnComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-m-w-start/t-m-w-beginn',
    component: TMWBeginnComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-fi-w-start/v-fi-w-beginn',
    component: VFiWBeginnComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-m-w-start/v-m-w-beginn',
    component: VMWBeginnComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-s-w-start/v-s-w-beginn',
    component: VSWBeginnComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-fi-w-start/l-fi-w-beginn/l-fi-ergebnis',
    component: LFiErgebnisComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-m-w-start/l-m-w-beginn/l-m-ergebnis',
    component: ErgibnsComponent,
  },
  {
    path: 'prufung-lernen/lernmodus/fwlfrage/l-s-w-start/l-s-w-beginn/l-s-ergebnis',
    component: LSErgebnisComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-m-w-start/t-m-w-beginn/t-m-ergebnis',
    component: TMErgebnisComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-s-w-start/t-s-w-beginn/t-s-ergebnis',
    component: TSErgebnisComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/teil-prufmodus/fwptfrage/p-t-fi-w-start/t-fi-w-beginn/t-fi-ergebnis',
    component: TFiErgebnisComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-m-w-start/v-m-w-beginn/v-m-ergebnis',
    component: VMErgebnisComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-s-w-start/v-s-w-beginn/v-s-ergebnis',
    component: VSErgebnisComponent,
  },
  {
    path: 'prufung-lernen/prufmodus/voll-prufmodus/fwpvfrage/p-v-fi-w-start/v-fi-w-beginn/v-fi-ergebnis',
    component: VFiErgebnisComponent,
  },
  {
    path: 'fragenlist/m-c-list',
    component: MCListComponent
  },
  {
    path: 'fragenlist/s-c-list',
    component: SCListComponent
  },
  {
    path: 'fragenlist/fi-i-list',
    component: FiIListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
