var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("******************************** 104 clone-merg");
var user04 = {
    name: "Pepe",
    age: 32,
};
function cloner(source) {
    return __assign({}, source);
}
var user04B = cloner(user04);
console.log(user04B);
//***********************
var a04 = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b04 = { name: "Luisa", age: 31, married: true };
function merger(source, target) {
    return __assign(__assign({}, target), source);
}
;
var mergeObj = merger(a04, b04);
console.log(mergeObj);
