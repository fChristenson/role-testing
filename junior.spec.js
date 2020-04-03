const User = require("./src/User");

describe("User", () => {
  it("should be possible to get the user's name", () => {
    const user = new User("foo");
    const name = user.getName();
    expect(name).toEqual("foo");
  });

  it("should be possible to set the user's name", () => {
    const user = new User("foo");
    user.setName("bar");
    const name = user.getName();
    expect(name).toEqual("bar");
  });
});