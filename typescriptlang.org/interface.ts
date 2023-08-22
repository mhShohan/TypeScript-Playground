interface InterfaceProps {
    id: string;
    name: string;
    age: number;
}

class Student implements InterfaceProps {
    constructor(public id: string, public name: string, public age: number) {}
}

// superclass can be used as interface
class Employee implements Student {
    constructor(public id: string, public name: string, public age: number) {}

    getName() {
        console.log(this.name);
    }
}
