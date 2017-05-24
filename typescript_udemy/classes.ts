class Stark {
    name: string = "brandon";
    // brandon is being made the default name for name
    static castle: string = "winterfell";
    // static property is accessible from the blueprint ( object with capital name)
    saying: String;

    constructor() {
        this.saying = Stark.castle;
    }
    hello(person: string) {
        console.log("Hello " + person);
    }


}


var ned = new Stark();
ned.saying = "Winter is comming";
console.log(Stark.castle);

ned.hello("RObery");