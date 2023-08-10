console.log("******************************** 207 - Reminder");
// Reminder
// El siguiente código implementa una sencilla clase que actúa como reminder, 
// es decir, dado un mensaje, lo muestra por consola transcurrido (al menos) 
// el tiempo indicado por el usuario:
var Reminder = /** @class */ (function () {
    function Reminder(text) {
        this.text = text;
    }
    Reminder.prototype.remindMe = function (delay) {
        var _this = this;
        setTimeout(function () {
            console.log("Your reminder after ".concat(delay, " seconds is: ").concat(_this.text));
        }, delay * 1000);
    };
    return Reminder;
}());
;
var reminder = new Reminder('Avisoooo!!');
reminder.remindMe(2);
// Te animamos a que crees una nueva instancia de reminder y la utilices.
// Escribe el mensaje que tu quieras y añade unos pocos segundos de retardo.
// Comprueba la salida por consola ... algo no funciona como esperábamos ¿verdad?
// ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?
