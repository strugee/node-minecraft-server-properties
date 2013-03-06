var properties = require("../lib/properties"),
    parse      = properties.parse,
    stringify  = properties.stringify;

describe("properties", function () {
    describe(".parse()", function () {
        it("should ignore comments", function () {
            parse("# this is a comment").should.eql({});
        });

        it("should parse true as a boolean", function () {
            parse("a=true").a.should.equal.true;
        });

        it("should parse false as a boolean", function () {
            parse("b=false").b.should.equal.false;
        });

        it("should parse an integer as a number", function () {
            parse("c=123").c.should.equal(123);
        });

        it("should parse an empty value as null", function () {
            parse("d=").should.eql({ d: null });
        });

        it("should parse anything else as a string", function () {
            parse("e=foo").e.should.equal("foo");
        });

        it("should handle multiple lines of input", function () {
            parse("a=1\nb=2\nc=3").should.eql({
                a: 1,
                b: 2,
                c: 3
            });
        });
    });

    describe(".stringify()", function () {
        it("should output true as the value", function () {
            stringify({ a: true }).should.equal("a=true");
        });

        it("should output true as the value", function () {
            stringify({ b: false }).should.equal("b=false");
        });

        it("should output a number as the value", function () {
            stringify({ c: 123 }).should.equal("c=123");
        });

        it("should output an empty value", function () {
            stringify({ d: null }).should.equal("d=");
        });

        it("should output a string as the value", function () {
            stringify({ e: "foo" }).should.equal("e=foo");
        });

        it("should handle multiple lines of output", function () {
            stringify({ a: 1, b: 2, c: 3 }).should.equal("a=1\nb=2\nc=3");
        });
    });
});
