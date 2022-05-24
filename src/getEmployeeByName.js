const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => employee.firstName === employeeName)
  || employees.find((employee) => employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
