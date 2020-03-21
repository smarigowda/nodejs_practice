const { createHello } = require("../lib/index");

test("get Salutation", () => {
  let helloInstance = createHello({ salutation: "hello world!" });
  let salutation = helloInstance.getSalutaion();
  expect(salutation).toBe("hello world!");
});
