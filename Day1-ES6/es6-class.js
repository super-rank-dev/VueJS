class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

function face() {
    return this.name + " is a " + this.gender;
}

Human.prototype.face = face;
const person1 = new Human("Stephen", "Green");
console.log(person1.face()); // ""

class ClassWithPrivateField {
    #privateField;

    constructor() {
        this.#privateField = 42;
    }
}

class SubClass extends ClassWithPrivateField {
    #subPrivateField;

    constructor() {
        super();
        this.#subPrivateField = 23;
    }
}

const clas = new SubClass(); // In some dev tools, it shows SubClass {#privateField: 42, #subPrivateField: 23}
console.log(clas);
