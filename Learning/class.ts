class Person {
    //access modifier - where the key-value pair can be use.
    public name: string;
    private age: number;
    readonly country: string;

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    details() {
        console.log(`${this.name} is ${this.age} years old!`);
    }
}

const person1 = new Person('Shohan', 23, 'Bangladesh');
const person2 = new Person('Mehdi Hasan', 23, 'Bangladesh');

const persons: Person[] = []; //type allaises

persons.push(person1);
persons.push(person2);

// console.log(persons);

//short hand technique for class and constructor

class User {
    // must use access modifier for shorthand technique
    constructor(
        private id: string,
        readonly userName: string,
        public email: string
    ) {}

    userInfo() {
        console.log({
            id: this.id,
            userName: this.userName,
            email: this.email,
        });
    }
}

const user1 = new User('asdjfkaasdfa', 'mhShohan', 'mshohanhasan@gmail.com');

user1.userInfo();
