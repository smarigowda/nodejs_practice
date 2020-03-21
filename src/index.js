import { createHello } from "./hello";
let helloInstance = createHello({ salutation: "hello world!" });
console.log(helloInstance);
console.log(helloInstance.getSalutaion());
export { createHello };
