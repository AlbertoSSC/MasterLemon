var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** DELIVERABLE 02 *********************");
//Concat
var a = [1, 2, 3];
var b = ["a", "b", "c"];
var c = ["X", "8", "Y"];
var concatArr = function (arr1, arr2) {
    var arrMix = __spreadArray(__spreadArray([], arr1, true), arr2, true);
    console.log("Concat arrays: " + arrMix);
};
concatArr(a, b);
//Optional
var multiConcat = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var multiArr = __spreadArray([], arg, true);
    console.log("Optional, multi: " + multiArr);
};
multiConcat(a, b, c);
