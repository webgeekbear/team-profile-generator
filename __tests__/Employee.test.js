const Employee = require("../lib/Employee");

test('creates an employee object', ()=> {
    const employee = new Employee("Jake", "301", "email@email.org");

    // Test properties
    expect(employee.name).toBe("Jake");
    expect(employee.id).toBe("301");
    expect(employee.email).toBe("email@email.org");

    // Test methods
    expect(employee.getName()).toBe("Jake");
    expect(employee.getId()).toBe("301");
    expect(employee.getEmail()).toBe("email@email.org");
    expect(employee.getRole()).toBe("Employee");
})