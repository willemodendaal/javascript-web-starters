import {expect} from "chai";
import ClassToTest from "../src/fileToTest";

describe("a test, to test", function() {
    describe("ClassToTest", function() {
        it("can be constructed", function() {
            const cls = new ClassToTest();
            
            expect(cls).to.not.be.null;
            expect(cls.anotherClass).to.not.be.null;
        });
    });
}); 