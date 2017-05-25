// var isWinter: any = false;
// isWinter = 123;
// var count: Number = 5;
// // var name: string = "Bran";
// var names: any[] = ["jon,", 5]
var starks;
(function (starks) {
    starks[starks["jon"] = 0] = "jon";
    starks[starks["bran"] = 1] = "bran";
    starks[starks["eddard"] = 2] = "eddard";
    starks[starks["catlyn"] = 234] = "catlyn";
})(starks || (starks = {}));
//this is a string of keys
var cat = starks.catlyn;
var jo = 3;
var bob = 3;
var array = {
    jo: 4, bob: 4, stuff: function () {
        return "this is a function stuff";
    }
};
console.log(typeof array);
console.log(array.stuff());
console.log("this is a compile test");
console.log("this is a compile test");
console.log("this is a compile test");
console.log("this is a compile test");
console.log("this is a compile test");
console.log("this is a compile test");
console.log("this is a compile test");
console.log("this is a compile test");
// function printname(stark: Stark) {
//     console.log(stark.name);
// }
// printname({ name: "Eddard" });
// printname({ name: "joe" }); 
