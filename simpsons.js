const fs = require('fs').promises;

async function main() {
  const readSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const characters = JSON.parse(readSimpsons);
  const mapChars = characters.map(char => `${char.id} - ${char.name}`);
  return console.log(mapChars);
}

main()