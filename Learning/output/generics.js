//here <T> is geneerics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userInfoFunction = function (obj) {
    var id = Math.floor(Math.random() * 100000).toString();
    return __assign({ id: id }, obj);
};
var user = userInfoFunction({
    name: 'Shohan',
    email: 'mshohanhasan@gmail.com'
});
console.log(user);
