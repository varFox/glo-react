export default class Emp {
  constructor(employers) {
    this.employers = employers;
  }
  showEmp() {
    return this.employers.filter(name => name.trim().length > 0).map(name => name.toLowerCase().trim());
  }
} 
