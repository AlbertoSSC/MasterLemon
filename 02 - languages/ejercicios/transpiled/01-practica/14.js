console.log("******************************** 114 - Values");
function values(obj) {
    var values = [];
    for (var value in obj) {
        values.push(obj[value]);
    }
    return values;
    // return Object.values(obj); // ==> mucho mejor
}
;
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" }));
console.log('============================');
// Ejemplo:
function Person(name) {
    this.name = name;
}
Person.prototype.walk = function () {
    console.log("I'm walking");
};
function valuesNoInherit(obj) {
    var values = [];
    for (var value in obj) {
        if (obj.hasOwnProperty(value)) {
            values.push(obj[value]);
        }
    }
    ;
    return values;
    // return Object.values(obj); // ==> tb funciona
}
;
var john = new Person("John");
console.log(valuesNoInherit(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
