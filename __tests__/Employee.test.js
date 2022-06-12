const Employee = require('../lib/Employee');
const id = 1
const name = 'Test'
const email = 'test@test.com'


test('set properties to entered values', () => {
    const employee = new Employee(name, id, email)
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(1);
    expect(employee.email).toBe(email);
})



test('returns name of employee', () => {
    const employee = new Employee(name, id, email);
    expect(employee.getName()).toBe(name);

})

test('returns id of employee', () => {
    const employee = new Employee(name, id, email);
    expect(employee.getId()).toBe(id);

})

test('returns email of employee', () => {
    const employee = new Employee(name, id, email);
    expect(employee.getEmail()).toBe(email);

})

test(`returns role as 'Employee'`, () => {
    const employee = new Employee(name, id, email);
    expect(employee.getRole()).toBe('Employee');

})

