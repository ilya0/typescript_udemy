var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// instantiate a class with the property of name
var Person = (function () {
    // inputted name is name
    function Person(name) {
        this.name = name;
    }
    // dance function console logs name plus is dancing
    Person.prototype.dance = function () {
        console.log(this.name + "  is dancing");
    };
    return Person;
}());
// create a new object called bran and run dance on that new object
var bran = new Person(" bran");
bran.dance();
var AwesomePerson = (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.dance = function () {
        console.log("so awesome");
    };
    return AwesomePerson;
}(Person));
var robb = new AwesomePerson("Robb");
robb.dance();
