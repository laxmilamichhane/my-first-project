const companies = [
  { name: 'One', category: 'Loss', age: 20, end: 2020 },
  { name: 'Two', category: 'Loss', age: 22, end: 2003 },
  { name: 'Three', category: 'Profit', age: 21, end: 2000 },
  { name: 'Four', category: 'Loss', age: 44, end: 1990 },
  { name: 'Five', category: 'Retail', age: 22, end: 2003 },
];
console.log(companies);
//filter
//const end = companies.filter((company) => company.end >= 2002);
//console.log(end);

//map
//const compay = companies.map(newfunction);
//function newfunction(item, index) {
// return item.name;
//}
//console.log(compay);

const subjects = [
  { subjectone: 'Science', time: 'Morning' },
  { subjectone: 'Social', time: 'Day' },
  { subjectone: 'English', time: 'Morning' },
  { subjectone: 'Nepali', time: 'Day' },
  { subjectone: 'Maths', time: 'Morning' },
];
console.log(subjects);
//map
const subject = subjects.map(newfunction);
function newfunction(item, index) {
  return item.time;
}
console.log(subject);
//map
const subj = subjects.map(myfunction);
function myfunction(item, index) {
  return item.subjectone;
}
console.log(subj);

//filter
const time = subjects.filter((subb) => subject.time === 'Morning');
console.log(time);

//loop
var number = '';
var i = 0;
while (i <= 20) {
  number += i;
  i++;
}
console.log(number);

//fill
const day = ['Hi', 'Dhelloe', 'Melloe', 'lspowjd', 'Mornings'];
console.log(day.fill('Laxmi', 2, 4));

//slice
const ha = ['Hi', 'Dhelloe', 'Melloe', 'lspowjd', 'Mornings'];
console.log(ha.slice(1, 3));
