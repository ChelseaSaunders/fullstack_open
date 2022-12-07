"use strict";
// Basic Types
let id = 5;
let company = "test company";
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3];
let arr = ['t', 1];
// Tuple
let person = [1, 'test', true];
// Tuple array
let employee;
employee = [
    [1, 't'],
    [3, 'v']
];
// Union
let anotherID = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log(Direction1.Up); // => 0 (if assign first value to higher int then will add one from start each time)
const user = {
    id: 1,
    name: 'testname'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void (undefined)
function log(message) {
    console.log(message);
}
;
const user2 = {
    id: 1,
    name: 'testname'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, "brad");
const mike = new Person(2, "mike");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employee1 = new Employee(3, 'jim', 'developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(['a', 'b', 'c']);
