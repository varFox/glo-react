const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(name => name.trim().length > 0)
              					.map(name => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {cash = 0, eu = '', rus = ''} = sponsors;
const calcCash = () => cash.reduce((a, b) => a + b);

const makeBusiness = ({
    owner = 'Sam',
    cash = 0,
    emp = 'nobody',
    director = 'Victor'
}) => {
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
	console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors:
${sumSponsors}
Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({cash: calcCash(), emp: employersNames});
