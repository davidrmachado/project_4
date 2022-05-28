const { species, hours } = require('../data/zoo_data');

//  Função para filtar animais disponíveis em determinado dia:
const getAvailability = (day) => species.filter((specie) =>
  specie.availability.includes(day)).map(({ name }) => name);

// Função para retornar objeto contendo cronograma completo:
const completeSchedule = () => {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    schedule[day] = {};
    if (day !== 'Monday') {
      schedule[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
      schedule[day].exhibition = getAvailability(day);
    } else {
      schedule[day].officeHour = 'CLOSED';
      schedule[day].exhibition = 'The zoo will be closed!';
    }
  });
  return schedule;
};

// Função para retornar objeto contendo cronograma de determinado dia:
const getDailySchesule = (day) => {
  const dailySchesule = {};
  const singleDay = completeSchedule();
  dailySchesule[day] = singleDay[day];
  return dailySchesule;
};

function getSchedule(scheduleTarget) {
  const allSpecies = species.map((specie) => specie.name);

  //  Condição em que algum animal válido é passado como argumento:
  if (allSpecies.includes(scheduleTarget)) {
    return (species.find((specie) => specie.name === scheduleTarget)).availability;
  }

  // Condição em que recebe somente algum dia da semana como argumento:
  if (Object.keys(hours).includes(scheduleTarget)) return getDailySchesule(scheduleTarget);

  // Demais condições:
  return completeSchedule();
}

module.exports = getSchedule;
