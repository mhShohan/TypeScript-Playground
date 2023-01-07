class User {
    name: string
    email: string
    private  country: string = "Bangladesh" // only accessible within the class

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
}

//Short hand of User (mostly experience developer write this type of code)
class Users {
    constructor(public name: string,private email: string) {}

    private getInfo(): string{
        return this.name + this.email
    }
}





const newUser = new Users('mh', 'mh@mh.com')
console.log(newUser)



export {}