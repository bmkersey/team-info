
//Sets up main Employee Class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
//function to return the employees name
    getName = function() {
        return this.name;
    };
//function to return the employees ID
    getId = function() {
        return this.id;
    };
//function to return the employees email.
    getEmail = function() {
        return this.email
    };
//fucntion to return employees role
    getRole = function() {
        return 'Employee'
    };
};

module.exports = Employee
