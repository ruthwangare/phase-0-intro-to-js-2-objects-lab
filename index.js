const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }

  module.exports = {
    updateEmployeeWithKeyAndValue,
  };
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  module.exports = {
    destructivelyUpdateEmployeeWithKeyAndValue,
  };
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }

  module.exports = {
    deleteFromEmployeeByKey,
  };
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
