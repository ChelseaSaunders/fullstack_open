// Basic Types
let id: number = 5;
let company: string = "test company";
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;

let ids: number[] = [1, 2, 3];
let arr: any[] = ['t', 1];

// Tuple
let person: [number, string, boolean] = [1, 'test', true];
// Tuple array
let employee: [number, string][];

employee = [
  [1, 't'],
  [3, 'v']
];

// Union
let anotherID: string | number = 22;

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
};

console.log(Direction1.Up) // => 0 (if assign first value to higher int then will add one from start each time)

// Objects
type User = {
  id: number,
  name: string
};

const user: User = {
  id: 1,
  name: 'testname'
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void (undefined)
function log(message: string | number): void {
  console.log(message);
}

// Interfaces (better than type; type can be used with primitives and unions though, interface cant)
interface UserInterface {
  readonly id: number  //cannot reassign once created
  name: string
  age?: number //optional property
};

const user2: UserInterface = {
  id: 1,
  name: 'testname'
};

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number
  name: string
  register(): string
};

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`
  }
}

const brad = new Person(1, "brad");
const mike = new Person(2, "mike");

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const employee1 = new Employee(3, 'jim', 'developer');

// Generics
function getArray<T>(items: T[]): TemplateStringsArray[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(['a', 'b', 'c']);

