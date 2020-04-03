class Employee {
    constructor(firstname, lastname, position) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._position = position;
        this._salary = this.generateSalary();
    }

    // Getters
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get position() {
        return this._position;
    }
    get salary() {
        return this._salary;
    }

    // Setters
    set firstname(value) {
        this._firstname = value;
    }
    set lastname(value) {
        this._lastname = value;
    }
    set position(value) {
        this._position = value;
    }
    set salary(value) {
        this._salary = value;
    }

    // Instance method
    generateSalary() {
        if (this.position.toLowerCase() === "manager") {
            return 20000000;
        } else if (this.position.toLowerCase() === "staff") {
            return 10000000;
        } else {
            return 0;
        }
    }
}

class AccountingDepartment {
    constructor () {
        this.name = "Accounting";
        this.established_date = new Date();
        this.employees = [];
    }
    // Instance method
    addEmployee(employee) {
        this.employees.push(employee);
    }
}

// Create instance Employee - if not created it won't affect with instance AccountingDepartment
const jon = new Employee("Jon", "Snow", "manager");
console.log(jon);

// Create instance AccountingDepartment - if not created it won't affect with instance Employee
const accDepartment = new AccountingDepartment ();
console.log(accDepartment);

// Add Employee into AccountingDepartment
accDepartment.addEmployee(jon);
console.log(accDepartment);