export interface Fifragen {
  fifnr: number;
  fifstext: string;
  fifantworten: Antwort[];
}
export interface Antwort {
  antworttext: string;
  antwortrichtig: boolean;
  antworteingabe: boolean;
  gegebenetext?: string;

}

