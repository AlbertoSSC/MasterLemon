console.log("********************************  113 - This");

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
var surnameFunction = person.wife.getSurname; //.bind(person); --> para volver a darle contexto al this.
console.log(surnameFunction.call(person));
console.log(surnameFunction());