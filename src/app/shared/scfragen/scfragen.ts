

export interface Scfragen {
  fscnr: number;
  fscstext: string;
  fscantworten: Antwort [];
}
export interface Antwort{
  antworttext: string;
  antwortrichtig: boolean;
  antworteingabe?: boolean;
}
