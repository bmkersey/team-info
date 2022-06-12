const Employee = require('./Employee');


//sets up the Intern class as an extension of employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
//function that returns the interns school
    getSchool = function () {
        return this.school;
    };
//function that returns the role
    getRole = function () {
    return 'Intern';
    };
};

module.exports = Intern