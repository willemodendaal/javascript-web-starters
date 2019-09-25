import AClassToTest from "./fileToTest";

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello from TypeScript, " + this.greeting;
    }
}

let greeter = new Greeter("my favorite developer!");

alert(greeter.greet());