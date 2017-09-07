

// function toHexadecimal
function toHexadecimal(input, format) {
    var Hexadecimal = [];
    var calculations = 0;
    var decimal = 0;
    var hexDigit = 0;
    "use strict";
    Math.trunc = Math.trunc || function (i) {
            return i - i % 1;
        };
    function convertDigit(decimal) {
        var hexValue = "";
        switch (decimal) {
        case 0:
            hexValue = "0";
            break;
        case 1:
            hexValue = "1";
            break;
        case 2:
            hexValue = "2";
            break;
        case 3:
            hexValue = "3";
            break;
        case 4:
            hexValue = "4";
            break;
        case 5:
            hexValue = "5";
            break;
        case 6:
            hexValue = "6";
            break;
        case 7:
            hexValue = "7";
            break;
        case 8:
            hexValue = "8";
            break;
        case 9:
            hexValue = "9";
            break;
        case 10:
            hexValue = "A";
            break;
        case 11:
            hexValue = "B";
            break;
        case 12:
            hexValue = "C";
            break;
        case 13:
            hexValue = "D";
            break;
        case 14:
            hexValue = "E";
            break;
        case 15:
            hexValue = "F";
            break;
        }
        return hexValue;
    }
    while (input >= 16) {
        decimal = Math.trunc(input) % 16;
        hexDigit = convertDigit(decimal);
        Hexadecimal.push(hexDigit);
        input = input / 16;
        calculations += 1;
    }

    Hexadecimal.push(convertDigit(Math.trunc(input)));

    Hexadecimal.reverse();
    if (format === "str") {
        return Hexadecimal.join("");
    }
    if (format === "arr") {
        return Hexadecimal;
    }
}