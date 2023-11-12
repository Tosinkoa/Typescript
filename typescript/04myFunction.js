"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addTwo = function (num) {
    return num + 2;
    // return "hello"
};
var getUpper = function (val) {
    return val.toUpperCase();
};
var signUpUser = function (name, email, isPaid) {
};
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("Paul");
signUpUser("Paul", "tosinkoa1@gmail.com", false);
loginUser("h", "h@h.com");
var getValue = function (myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
var consoleError = function (errMsg) {
    console.log(errMsg);
};
var handleError = function (errMsg) {
    throw new Error(errMsg);
};
