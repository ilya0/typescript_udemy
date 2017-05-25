var Helper;
(function (Helper) {
    var Language = (function () {
        function Language() {
        }
        return Language;
    }());
    Language.Greeting = "bonjur";
    Helper.Language = Language;
})(Helper || (Helper = {}));
console.log(Helper.Language.Greeting);
console.log("Hello word");
//# sourceMappingURL=main,js.map