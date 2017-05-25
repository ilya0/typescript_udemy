interface Stark {
    name: string;
    age?: number;
    // ? means its not required
}


// var isWinter: any = false;
// isWinter = 123;
// var count: Number = 5;
// // var name: string = "Bran";
// var names: any[] = ["jon,", 5]


enum starks { jon, bran, eddard, catlyn = 234 }
//this is a string of keys

var cat: starks = starks.catlyn


var jo = 3;
var bob = 3;
var array = {
    jo: 4, bob: 4, stuff: function () {
        return "this is a function stuff"
    }
}
console.log(typeof array);
console.log(array.stuff());




console.log("this is a compile test")
console.log("this is a compile test")

console.log("this is a compile test")
console.log("this is a compile test")

console.log("this is a compile test")
console.log("this is a compile test")
console.log("this is a compile test")
console.log("this is a compile test")
// function printname(stark: Stark) {
//     console.log(stark.name);

// }

// printname({ name: "Eddard" });
// printname({ name: "joe" });