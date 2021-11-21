const Intern = require("../lib/Intern");

test('creates a Intern object', () => {
    const intern = new Intern("Jake", "301", "email@email.org", "UC Berkeley");

    // Test properties
    expect(intern.school).toBe("UC Berkeley");

    // Test methods
    expect(intern.getSchool()).toBe("UC Berkeley");
    expect(intern.getRole()).toBe("Intern");
});