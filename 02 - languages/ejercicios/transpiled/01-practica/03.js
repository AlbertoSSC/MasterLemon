console.log("******************************** 103 check-arguments");
function f2(input) {
    var result = input === undefined ? "unknown" : input || "";
    console.log(result);
}
f2(undefined);
