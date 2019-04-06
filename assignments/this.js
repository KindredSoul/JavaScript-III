/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window - The global/window principle is this' default setting. If there is no prior instance of an object, then 'this' will bind to the window (i.e. the codepen window, vscode window, etc).

* 2. Implicit - The implicit principle means that whenever we all an object function or method, whatever is immediately left of the dot is what 'this' refers to or what it is implying. Example: With myObj.speak() myObj is the implied 'this' since it is left of the dot

* 3. Explicit - Explicit is similar to implicit, however, it differs in that you can reassign the 'this' to a new obj when calling a method by using either the call, apply, or bind keyword. Whatever is to the right of the keyword is now what 'this' refers to

* 4. New - The new principle refers to when you create a class and then create a new object using the class's constructor (probably the wrong terminology). Whenever you invoke the new object, 'this' will refer to that object. If you were to invoke 5 objects, then you would see 5 different instances of 'this'
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
// sayName('llama');


// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    speak: function(){
        console.log('implicit this === ', this);
        return console.log(`${this.greeting}, world!`);
    }
};
// myObj.speak();


// Principle 3

// code example for New Binding
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        console.log(`This new binding,`, this);
        return console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old!`);
    }
}
const jabril = new Person({name: 'Jabril', age: 24});
// jabril.speak();

// Principle 4

// code example for Explicit Binding
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        console.log(`This new binding`, this);
        return console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old!`);
    }
}
// const jabril = new Person({name: 'Jabril', age: 24});
const teriq = new Person({name: 'Teriq', age: 42});

jabril.speak.call(teriq);
teriq.speak.apply(jabril);