const Manager = require('../lib/Manager');

//sets up mock info
const name = 'test';
const id = 1;
const email = 'test@test.com';
const officeNumber = 420;

test('set properteis to entered values', () => {
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.name).toBe(name)
    expect(manager.id).toBe(id)
    expect(manager.email).toBe(email)
    expect(manager.officeNumber).toBe(officeNumber);
});

test(`return role as 'Manager'`, () => {
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getRole()).toBe('Manager');
});

test('return office number as entered',() => {
    const manager = new Manager(name, id, email, officeNumber)
    expect(manager.getOfficeNumber()).toBe(officeNumber)
});
