import AnotherClass from "./anotherFile";

export default class ClassToTest {
    anotherClass: AnotherClass;
    constructor() {
        //Just a class that does not do anything.
        //  We just want to ensure our test can import this to "test" it.

        this.anotherClass = new AnotherClass();
    }
}