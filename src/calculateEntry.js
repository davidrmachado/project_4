const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((visitor) => visitor.age < 18).length;
  const adult = entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length;
  const senior = entrants.filter((visitor) => visitor.age >= 50).length;
  const visitors = { child, adult, senior };
  return visitors;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (entrants.length === undefined) return 0;
  const group = countEntrants(entrants);
  const entryValue = (group.child * data.prices.child) + (group.adult * data.prices.adult)
  + (group.senior * data.prices.senior);
  return entryValue;
}

module.exports = { calculateEntry, countEntrants };
