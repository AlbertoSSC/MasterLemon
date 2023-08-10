console.log("********************************  105 - Deep equal");
var user05 = { name: "María", age: 30 };
var clonedUser05 = { name: "María", age: 30 };
console.log(user05 === clonedUser05); // false
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    ;
    for (var prop in a) {
        //if (a.hasOwnProperty(prop) === b.hasOwnProperty(prop)) {
        if (b.hasOwnProperty(prop)) {
            if (a[prop] !== b[prop]) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    ;
    return true;
}
;
console.log(isEqual(user05, clonedUser05)); // true
///////////////////// -- Apartado B  -- //////////////////////////////////
var user05B = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};
var clonedUser05B = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    ;
    if (typeof a !== typeof b) {
        return false;
    }
    ;
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }
    ;
    var keysA = Object.keys(a);
    var keysB = Object.keys(b);
    console.log("keys de a: " + keysA);
    console.log("keys de b: " + keysB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    ;
    for (var _i = 0, keysA_1 = keysA; _i < keysA_1.length; _i++) {
        var key = keysA_1[_i];
        //console.log("BUCLE key: " + key)
        if (!b.hasOwnProperty(key)) {
            return false;
        }
        if (!deepEqual(a[key], b[key])) {
            return false;
        }
    }
    ;
    return true;
}
;
console.log(deepEqual(user05B, clonedUser05B));
