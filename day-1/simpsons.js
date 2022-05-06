const fs = require('fs').promises;
const readline = require('readline-sync');
const simpsonId = readline.questionInt('Tell me a number ');

async function main(id) {

  // part 1
  const readSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const characters = JSON.parse(readSimpsons);
  const filterChars = characters.filter(char => char.id !== '10' && char.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(filterChars));
  const mapChars = filterChars.map(({id, name}) => `${id} - ${name}`);
  mapChars.forEach(char => console.log(char));

  //part 2
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