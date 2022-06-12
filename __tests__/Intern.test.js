const Intern = require('../lib/Intern');

//sets up mock info
const name = 'test';
const id = 1;
const email = 'test@test.com';
const school = 'testSchool';

test('give properties value of input', () => {
    const intern = new Intern(name, id, email, school);
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
    })

test('return value of this.school property', () => {
    const intern = new Intern(name, id, email, school);
    expect(intern.getSchool()).toBe(school);
});

test(`return the role of the employee as 'Intern'`, () => {
    const intern = new Intern(name, id, email, school);
    expect(intern.getRole()).toBe('Intern');
})
