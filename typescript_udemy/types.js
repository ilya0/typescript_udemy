var isWinter = false;
isWinter = 123;
var count = 5;
// var name: string = "Bran";
var names = ["jon,", 5];
var starks;
(function (starks) {
    starks[starks["jon"] = 0] = "jon";
    starks[starks["bran"] = 1] = "bran";
    starks[starks["eddard"] = 2] = "eddard";
    starks[starks["catlyn"] = 3] = "catlyn";
})(starks || (starks = {}));
//this is a string of keys
var cat = starks.catlyn;

function getName(): void {
    console.log("Winter is COmming!");
}

// void is used for functions that dont return anything