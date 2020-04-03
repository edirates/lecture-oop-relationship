const fs = require("fs");
const Manager = require("./Manager.js");
const { Staff, Trainee } = require("./Staff.js");

// class Factory decide which class used to be instantiated according to data
class EmployeeFactory {
    // Static method doesn't require constructor because it is a class method not instance method
    static create (employee) {
        if (employee.position.toLowerCase() === "manager") {
            return new Manager (employee.firstname, employee.lastname);
        } else if (employee.position.toLowerCase() === "staff") {
            return new Staff (employee.firstname, employee.lastname);
        } else if (employee.position.toLowerCase() === "trainee") {
            return new Trainee (employee.firstname, employee.lastname);
        }
    }
}

// Read and parsing data from employees.json
const employeeData = JSON.parse(fs.readFileSync("./employees.json", "utf8"));

// Declare employees to contain a couple types of instance (Manager / Staff / Trainee)
let employees = [];

// Loop parsed data and convert it into instances using factory method
for (let i = 0; i < employeeData.length; i++) {
    let employee = EmployeeFactory.create(employeeData[i]);
    employees.push(employee);
}

// Show results that contain couple types of instance (Manager / Staff / Trainee)
console.log(employees);