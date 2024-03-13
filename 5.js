function invertString(str) {
    let inverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

let insertedString = "Olá, Mundo!";

let invertedString = invertString(insertedString);
console.log("A string inserida foi:", insertedString);
console.log("A string invertida é:", invertedString);
