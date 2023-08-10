console.log("******************************** 201 - Args");
function f(a201, _a, c201) {
    var _b = _a === void 0 ? {} : _a, b201 = _b.b201;
    if (c201 === void 0) { c201 = 100; }
    console.log(arguments.length);
    console.log(a201, a201 === arguments[0]);
    console.log(b201, b201 === arguments[1]);
    console.log(c201, c201 === arguments[2]);
    console.log("_________________");
}
;
f("JS rocks!", { b201: "b" });
f({ b201: "b" });
f("JS sucks!", null, 13);
