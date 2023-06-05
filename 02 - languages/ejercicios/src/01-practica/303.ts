console.log("******************************** 303 - Morse");


/*
"·"  => La duración de 1 punto es la referencia temporal.
"-"" => Las rayas duran 3 puntos.

La separación entre cada punto o cada raya es también de 1 punto.
La separación entre letras es de 3 puntos.
La separación entre palabras es de 7 puntos.

1pto = 50ms
*/

const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

type MorseMap = { [key: string]: string };

const createMorseTransmitter = (morseMap: MorseMap, message: string) => {
  let morseMessage = "";

  const transmitSignal = (duration: number, symbol: string) => {
    console.log("On", symbol);
    pause(duration);
    console.log("Off", symbol);
    pause(1); // Espacio entre puntos/rayas
    console.log("____");
  };

  const pause = (points: number) => {
    const start = new Date().getTime();
    while (new Date().getTime() - start < points * 50) {
    }
  };

  for (let i = 0; i < message.length; i++) {
    const char = message[i].toLowerCase();
    if (char in morseMap) {
      const morseCode = morseMap[char];
      for (let j = 0; j < morseCode.length; j++) {
        const symbol = morseCode[j];
        if (symbol === ".") {
          morseMessage += ".";
          transmitSignal(1, " ·");
        } else if (symbol === "-") {
          morseMessage += "-";
          transmitSignal(3, " -");
        };
      };
      transmitSignal(3, " "); //Espacio entre caracteres
      morseMessage += " ";
    } else {
      transmitSignal(7, "   "); //Espacio entre palabras
      morseMessage += "   ";
    }
  };

  return console.log("Transmisión completada" + "\n"
    + "Mensaje inicial: " + message + "\n"
    + "Señal morse: " + morseMessage);
};

const message = "Hello, World!";
createMorseTransmitter(morseAlphabet, message);
