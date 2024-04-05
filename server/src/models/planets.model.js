const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');

const planets = [];

fs.createReadStream(path.join(__dirname, '../data/kepler-data.csv'))
  .pipe(parse({
    comment: '#',
    columns: true
  }))
  .on('data', (data) => {
    planets.push(data)
  })
  .on('end', () => {
    console.log(planets)
  })


module.exports = {
  planets
}

