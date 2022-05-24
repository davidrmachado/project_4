const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employees) => employees.firstName === employeeName)
  || employees.find((employees) => employees.lastName === employeeName);
}

module.exports = getEmployeeByName;
