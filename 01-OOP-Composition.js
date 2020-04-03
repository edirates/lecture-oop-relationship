class Employee {
    constructor(firstname, lastname, position) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._position = position;
        this._salary = this.generateSalary();
        this._contract = this.getContract();
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
    get contract() {
        return this._contract;
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
    set contract(value) {
        this._contract = value;
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

    // Contract will be created automatically after employee created
    // If there is no employee created, this contract won't be created
    getContract() {
        return new Contract (this.fullname, this.position, this.salary);
    }
}

class Contract {
    constructor (fullname, position, salary) {
        this._fullname = fullname;
        this._position = position;
        this._salary = salary;
        this._period = 1;
        this._status = "probation";
    }

    // Getters
    get fullname() {
        return this._fullname;
    }
    get position() {
        return this._position;
    }
    get salary() {
        return this._salary;
    }
    get period() {
        return this._period;
    }
    get status() {
        return this._status;
    }

    // Setters
    set fullname(value) {
        this._fullname = value;
    }
    set position(value) {
        this._position = value;
    }
    set salary(value) {
        this._salary = value;
    }
    set period(value) {
        this._period = value;
    }
    set status(value) {
        this._status = value;
    }
}

// Create instance Employee and automatically create instance Contract 
// If there is no instance Employee created, there will be no instance Contract
const jon = new Employee("Jon", "Snow", "manager");
console.log(jon);