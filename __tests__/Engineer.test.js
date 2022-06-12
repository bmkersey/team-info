const Engineer = require('../lib/Engineer');
const name = 'test'
const id = 1
const email = 'test@test.com'
const github = 'test2'

test('set properties as entered values', () => {
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
})

test('return value of github', () => {
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.getGithub()).toBe(github);
})

test(`return role as 'Engineer'`, () => {
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.getRole()).toBe('Engineer');
})
