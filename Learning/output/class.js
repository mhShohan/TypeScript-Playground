var Person = /** @class */ (function () {
    function Person(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Person.prototype.details = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old!"));
    };
    return Person;
}());
var person1 = new Person('Shohan', 23, 'Bangladesh');
var person2 = new Person('Mehdi Hasan', 23, 'Bangladesh');
var persons = [];
persons.push(person1);
persons.push(person2);
// console.log(persons);
//short hand technique for class and constructor
var User = /** @class */ (function () {
    function User(id, userName, email) {
        this.id = id;
        this.userName = userName;
        this.email = email;
    }
    User.prototype.userInfo = function () {
        console.log({
            id: this.id,
            userName: this.userName,
            email: this.email
        });
    };
    return User;
}());
var user1 = new User('asdjfka', 'mhShohan', 'mshohanhasan@gmail.com');
user1.userInfo();
