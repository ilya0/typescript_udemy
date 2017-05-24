var Stark = (function () {
    function Stark() {
        this.name = "brandon";
        this.saying = Stark.castle;
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    return Stark;
}());
// brandon is being made the default name for name
Stark.castle = "winterfell";
var ned = new Stark();
ned.saying = "Winter is comming";
console.log(Stark.castle);
ned.hello("RObery");
