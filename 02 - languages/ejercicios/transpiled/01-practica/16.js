console.log("******************************** 116 - zzcrypt");
// Descifra el siguiente secreto:
var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";
// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
function decrypt(secret) {
    var decrypt = "";
    for (var _i = 0, secret_1 = secret; _i < secret_1.length; _i++) {
        var char = secret_1[_i];
        var index = cipher.indexOf(char);
        if (index !== -1) {
            decrypt += plain[index];
        }
        else {
            decrypt += char;
        }
    }
    return decrypt;
}
;
console.log(decrypt(secret));
