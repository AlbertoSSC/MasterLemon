console.log("******************************** 201 - Args");

function f(a201, { b201 } = {}, c201 = 100) {
    console.log(arguments.length);
    console.log(a201, a201 === arguments[0]);
    console.log(b201, b201 === arguments[1]);
    console.log(c201, c201 === arguments[2]);
    console.log("_________________");
};
f("JS rocks!", { b201: "b" });
f({ b201: "b" });
f("JS sucks!", null, 13);