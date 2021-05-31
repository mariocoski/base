const { DEFAULT_PORT_NUMBER } = require("./index");

it("defines default port number", () => {
  expect(DEFAULT_PORT_NUMBER).toBe(3000);
});
