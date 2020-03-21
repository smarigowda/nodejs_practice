class Hello {
  salutation;
  constructor({ salutation }) {
    this.salutation = salutation;
  }
  getSalutaion() {
    return this.salutation;
  }
}

const createHello = ({ salutation }) => {
  return new Hello({ salutation });
};

export { createHello };
