class Person {
    constructor(protected name: string, protected email: string) {}

    public getPerson() {
        return { name: this.name, email: this.email };
    }
}

class User extends Person {
    constructor(private userId: string, name: string, email: string) {
        super(name, email);
    }

    public getUser() {
        return {
            userId: this.userId,
            name: this.name,
            email: this.email,
        };
    }
}

const user = new User('1', 'shohan', 'shohan@gmail.com');

// console.log(user.getUser());
// console.log(user.getPerson());
