import Money from './money';

export default class MakeBusiness extends Money {
  constructor({owner = 'Sam', emp = 'nobody', director = 'Victor', cash, eu, rus}) {
    super({cash, eu, rus});
    this.cash = cash;
    this.owner = owner;
    this.emp = emp;
    this.director = director;
  }
  viewMessage() {
    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${super.calcCash()}. And our employers: ${this.emp}
And we have a sponsors:
${super.sumSponsors()}
Note. Be careful with ${super.eu()}. It's a huge risk.`);
  }

}