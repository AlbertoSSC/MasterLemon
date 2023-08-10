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
console.log("************** DELIVERABLE 03 *********************");
//Clone merge
var user1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
var user2 = { name: "Luisa", age: 31, married: true };
//Clone
function clone(source) {
    var newObj = __assign({}, source);
    console.log(newObj);
}
clone(user1);
//Merge
function merge(source, target) {
    var mixing = __assign(__assign({}, target), source);
    console.log(mixing);
}
;
merge(user1, user2);
