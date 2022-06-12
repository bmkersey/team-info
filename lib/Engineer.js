const Employee = require('./Employee');


//creates the engineer class as an extension of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    //function to return the role
    getRole = function() {
        return 'Engineer';
    };
    //function to return the engi's github
    getGithub = function() {
        return this.github;
    };
    
};

module.exports = Engineer;