const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = data.employees.find((specie) => id === specie.id)
    .responsibleFor.filter((idd) => data.species.find((animal) => animal.id === idd).name)[0];

  const olderAnimal = data.species.find((specie) => specie.id === firstAnimal)
    .residents.sort((first, second) => second.age - first.age)[0];

  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
