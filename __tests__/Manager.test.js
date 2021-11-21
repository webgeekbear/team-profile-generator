const Manager = require("../lib/Manager");

test('creates a manager object', () => {
    const manager = new Manager("Jake", "301", "email@email.org", "12");

    // Test properties
    expect(manager.officeNumber).toBe("12");

    // Test methods
    expect(manager.getRole()).toBe("Manager");
});