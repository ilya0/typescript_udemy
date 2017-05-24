//// <reference  path = "timesTwo.ts" />
var use = new Utility.useful();
console.log(use.timesTwo(9));
var Utility;
(function (Utility) {
    var useful = (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
