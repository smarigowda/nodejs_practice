import { createHello } from "./test";
let helloInstance = createHello({ salutation: "hello world!" });
console.log(helloInstance);
console.log(helloInstance.getSalutaion());
export { createHello };
