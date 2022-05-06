const fs = require('fs').promises;
const readline = require('readline-sync');
const simpsonId = readline.questionInt('Tell me a number ');

async function main(id) {

  // part 1
  const readSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const characters = JSON.parse(readSimpsons);

  // part 3
  // const filterChars = characters.filter(({id}) => id !== '10' && id !== '6');
  // await fs.writeFile('./simpsons.json', JSON.stringify(filterChars));

  // part 4 & 5
  const filterChars = characters.filter(({id}) => id < 5);
  filterChars.push({id: '8', name: 'Nelson Muntz'});

  // part 6
  // splice() selects posision 4 in an array and reclaces 1 value for Maggie
  filterChars.splice(4, 1, {id: '15', name: 'Maggie Simpson'});
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(filterChars));
  
  //part 2
  const mapChars = filterChars.map(({id, name}) => `${id} - ${name}`);
  mapChars.forEach(char => console.log(char));
  const simpsonId = characters.find((char) => Number(char.id) === id);

  if (simpsonId === undefined) {
    throw new Error('id not found');
  }
  return simpsonId;
};

async function printReturn() {
  const printSimpson = await main(simpsonId);
  console.log(printSimpson);
};

printReturn();