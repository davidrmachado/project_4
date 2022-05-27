const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allSpecies = species.map((specie) => specie.name);

const daysOfweek = Object.keys(hours);
const {week} = daysOfweek;
console.log(daysOfweek);
const itsMonday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

// Função para gerar o objeto contendo o cronograma completo da semana:
const completeSchedule = () => {

}

// Função para gerar o objeto contendo o cronograma de um dia:
const scheduleOfTheDay = (day) => {
  const object = {
    day,
  };
  object.[`${daysOfweek}`]
};

function getSchedule(scheduleTarget) {
  //  Condição em que algum animal válido é passado como argumento:
  if (allSpecies.includes(scheduleTarget)) {
    return (species.find((specie) => specie.name === scheduleTarget)).availability;
  }

  // Condição em que recebe somente algum dia da semana como argumento:
  if (daysOfweek.includes(scheduleTarget)) {
    return scheduleOfTheDay(scheduleTarget);
  }

  // Condição em que recebe 'Monday' como argumento:
  if (scheduleTarget === 'Monday') {
    return itsMonday;
  }

  // Demais condições:
  return completeSchedule(scheduleTarget);
}

module.exports = getSchedule;
