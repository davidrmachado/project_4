const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find((specie) => specie.name === animal);
  return especie.residents.every((residet) => residet.age >= age);
}

module.exports = getAnimalsOlderThan;
