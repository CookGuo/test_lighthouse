// import { Greeter } from "../../src/index";
const Greeter = require('../../src/index')

test("My Greeter 1", () => {
  expect(Greeter).toBe(2);
});

test("My Greeter 2", () => {
  expect(Greeter).toBe(1);
});