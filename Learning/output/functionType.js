"use strict";
exports.__esModule = true;
exports.myFunc = void 0;
var myFunc = function (name, age, country, post) {
    if (country === void 0) { country = 'Bangladesh'; }
    return "Hi, I am ".concat(name, " and ").concat(age, " years old. Country ").concat(country, " ");
};
exports.myFunc = myFunc;
console.log((0, exports.myFunc)('Shohan', 24));
var fullName = function (firstName, lastName) {
    console.log("Fullname: ".concat(firstName, " ").concat(lastName));
};
exports["default"] = fullName;
