"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "Best", type: 39 });
// function getSearchProducts<T>(products: T[]): T {
//     // Do some database operations
//     const myIndex = 3
//     return products[myIndex]
// }
const getSearchProducts = (products) => {
    // Do some database operations
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
