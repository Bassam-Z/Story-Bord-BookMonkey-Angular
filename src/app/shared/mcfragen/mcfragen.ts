export interface Mcfragen {
  fmcnr: number;
  fmctext: string;
  fmcantworten: Antwort [];
}
export interface Antwort{
  antworttext: string;
  antwortrichtig: boolean;
  antworteingabe?: boolean;
}
