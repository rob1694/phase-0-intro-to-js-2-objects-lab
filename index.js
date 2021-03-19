// Write your solution in this file!
let employee = {name: "" ,streetAddress: ""}


function updateEmployeeWithKeyAndValue(employee) {
    const newEmployee = {...employee};
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey () {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey() {
    const newEmployee = employee;
    delete newEmployee.name;
    return newEmployee;
}