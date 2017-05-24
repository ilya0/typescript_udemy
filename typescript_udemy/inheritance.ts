

// instantiate a class with the property of name
class Person {
    name: String;
    // inputted name is name
    constructor(name: string) {
        this.name = name;

    }
    // dance function console logs name plus is dancing
    dance() {
        console.log(this.name + "  is dancing");
    }

}



// create a new object called bran and run dance on that new object
var bran = new Person(" bran")
bran.dance();

// class takes the properties from person
class AwesomePerson extends Person {
    dance() {
        console.log("so awesome");
        super.dance();
    }

}

var robb = new AwesomePerson("Robb");
robb.dance();