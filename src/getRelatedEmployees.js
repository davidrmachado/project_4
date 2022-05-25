const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// Para verificar se a pessoa colaboradora é gerente:
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

// Para retornar as pessoas lideradas pela gerência:
function getRelatedEmployees(managerId) {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } const relatedEmployees = employees.filter((employee) =>
    employee.managers.includes(managerId) === true);
  return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
