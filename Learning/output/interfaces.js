function drawRectangle(option) {
    var width = option.width, height = option.height;
    console.log("Rectangle width ".concat(width, " and height ").concat(height));
}
drawRectangle({ width: 30, height: 40 });
var UserDetails = /** @class */ (function () {
    function UserDetails(userId, userName, email, age) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.age = age;
    }
    UserDetails.prototype.userInfoFunc = function () {
        console.log({
            id: this.userId,
            userName: this.userName,
            email: this.email,
            age: this.age
        });
    };
    return UserDetails;
}());
var userArr = [];
var userNumber1 = new UserDetails('afsasdfad', 'mhshohan17', 'mshohanhasan@gmail.com', 24);
userNumber1.userInfoFunc();
