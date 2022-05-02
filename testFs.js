const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./my_file.txt', 'My Text');
    console.log('Success!');
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

main()
