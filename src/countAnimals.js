const data = require('../data/zoo_data');

function countAnimals(animal) {
  // Para nenhuma entrada:
  if (animal === undefined) {
    const animalCount = {};
    data.species.forEach((animalNumbers) => {
      animalCount[animalNumbers.name] = animalNumbers.residents.length;
    });
    return animalCount;
  }
  // Para somente espécie como entrada:
  if (animal.specie !== undefined && animal.sex === undefined) {
    return data.species.find(({ name }) => name === animal.specie).residents.length;
  }
  // Para espécie e sexo como entrada:
  if (animal.sex !== undefined) {
    const animais = data.species.find((animal1) => animal1.name === animal.specie);
    return animais.residents.filter((animal2) => animal2.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
