const Employee = require('./Employee');

//creates the Manager class as an extension of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNumber = officeNum;
    };
// function that returns the role
    getRole = function() {
        return 'Manager';
    };
};

module.exports = Manager