export default class Money {
  constructor({cash = 0, eu = ['', ''], rus = ['', '']}) {
    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
    // console.log(this.cash);
  }
  calcCash() {
    return this.cash.reduce((a, b) => a + b);
  }
  sumSponsors() {
    return this.eu.concat(this.rus, 'unexpected sponsor')
  }
  eu() {
    return this.eu[0];
  }
}