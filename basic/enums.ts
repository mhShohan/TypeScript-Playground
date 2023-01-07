// when convert TS into JS
// if we give const keyword before the enum then it will not produce crazy JS code
enum PersonCanAccess {
  SHOHAN = 'Shohan',
  RAHAT = 'Rahat',
  ALIF = 'Alif',
}

const name1: string = PersonCanAccess.SHOHAN;
const name2: string = PersonCanAccess.RAHAT;
const name3: string = PersonCanAccess.ALIF;

export {};
