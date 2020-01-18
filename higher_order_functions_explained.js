const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// print forEach companis

companies.forEach(company => console.log(company.name))


// filter Drinking Age

const candrink = ages.filter(age => age >= 21);
console.log(candrink)

// filter retil companies 

const retailCompanies = companies.filter( company => company.category === 'retail' )
console.log(retailCompanies)

// filter 80s companies

const eightiesCompanies = companies.filter (company => (company.start >= 1980 && company.start < 1990))

console.log(eightiesCompanies)

// filter companies that lasted 10 years or more

const companiesLastedTenYears = companies.filter(company => (company.start - company.end) >= 10)

console.log(companiesLastedTenYears)

// create array of companies by names by using map method

const companyNames = companies.map(company => console.log(company.name))

// create array of companies by there start and end year using map method 

const companyStartAndEndDate = companies.map( company => `[${company.start} ${company.end}]`)
console.log(companyStartAndEndDate)

// create array of ages times 2 by map method using map method

const agesTimes10 = ages.map( age => age * 10)
console.log(agesTimes10)

// first multiply it by 10 than square root the number using map method

const agesTimesSqrt10 = ages.map( age => age * 10).map(age => Math.sqrt(age))
console.log(agesTimesSqrt10)

// sort companies by sort method 

const sortedArray = companies.sort((a,b) => (a.start > b.start) ? 1 : -1)
console.log(sortedArray)

// sort ages by sort method
const sortAge = ages.sort((a,b) => a - b)
console.log(sortAge)

// sum all the age by using reduce method 

const sumAge = ages.reduce((a,b) => a + b, 0)
console.log(sumAge)

// Add total years of each companies operation using reduce method

const addCompanies = companies.reduce( (total, company) => total + (company.end -company.start),0)

console.log(addCompanies)

// first multiply the age by 2, than filter age by 40, sort age in ascending order, than add all the array

const khichdi = ages.map( age => age * 2).filter( age => age >= 40).sort((a,b) => a-b).reduce((a,b) => a + b, 0)
console.log(khichdi)                    


