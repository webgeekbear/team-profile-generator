const Engineer = require("../lib/Engineer");

test('creates an Engineer object', () => {
    const engineer = new Engineer("Jake", "301", "email@email.org", "mygithub");

    // Test properties
    expect(engineer.github).toBe("mygithub");

    // Test methods
    expect(engineer.getGithub()).toBe("mygithub");
    expect(engineer.getRole()).toBe("Engineer");
});